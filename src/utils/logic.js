import { TRAINING_PLAN, USER_PROFILE, FOOD_DATABASE } from './data';

// Helper to get formatted date string
export const getTodayDate = () => new Date().toISOString().split('T')[0];

/**
 * DOUBLE PROGRESSION LOGIC
 * Input:
 * - exercise: Object from TRAINING_PLAN
 * - lastLog: { weight: number, reps: [number, number, ...] } or null
 * 
 * Output:
 * - { suggestion: string, targetWeight: number, targetReps: string }
 */
export function getProgressionAdvice(exercise, lastLog) {
    if (!lastLog) {
        return {
            text: `首次训练，建议使用基础重量 ${exercise.baseWeight}kg，目标 ${exercise.sets}组 x ${exercise.minReps}-${exercise.maxReps}次`,
            targetWeight: exercise.baseWeight,
            targetReps: `${exercise.sets} x ${exercise.minReps}-${exercise.maxReps}`
        };
    }

    const { sets: targetSets, maxReps, minReps } = exercise;
    const { weight: lastWeight, reps: lastReps } = lastLog;

    // Check completion
    // Ideally lastReps is an array e.g., [12, 12, 12, 12]
    // We assume if they entered a single number, it applies to all sets (simplified input)
    // or we handle the array. Let's assume array for calculation.

    const completedSets = lastReps.filter(r => r >= maxReps).length;
    const isFullSuccess = completedSets >= targetSets;
    // Note: Simple logic as per rules: "completed 4x12" -> increase weight.

    // Rule 2: Increase Weight
    if (isFullSuccess) {
        const newWeight = lastWeight + 2.5; // Conservative increment
        return {
            text: `上次完成 ${lastWeight}kg ${targetSets}x${maxReps}，表现完美！\n🔥 明天挑战加重：${newWeight}kg，目标 ${targetSets}组 x ${minReps}次`,
            targetWeight: newWeight,
            targetReps: `${targetSets} x ${minReps}`
        };
    }

    // Rule 1: Increase Capacity (Reps)
    // If not full success, keep weight, aim for more reps.
    return {
        text: `上次 ${lastWeight}kg 未能完全打通 ${targetSets}x${maxReps}。\n💪 明天保持重量，争取每组多做一个！`,
        targetWeight: lastWeight,
        targetReps: `${targetSets} x ${maxReps}` // Still aiming for max reps
    };
}

/**
 * DIET LOGIC
 * Input: currentLogs (array of { food: string, count: number })
 * Output: { proteinGap, calorieGap, suggestion }
 */
export function calculateDietStatus(dailyLogs) {
    let totalProtein = 0;
    let totalCalories = 0;
    let totalCarbs = 0;

    dailyLogs.forEach(log => {
        const food = FOOD_DATABASE[log.food];
        if (food) {
            totalProtein += food.protein * log.count;
            totalCalories += food.calories * log.count;
            if (food.carbs) totalCarbs += food.carbs * log.count;
        }
    });

    const pGap = USER_PROFILE.goals.protein - totalProtein;
    const cGap = USER_PROFILE.goals.calories - totalCalories;

    let advice = "";
    if (pGap > 0) {
        const eggsNeeded = Math.ceil(pGap / FOOD_DATABASE["鸡蛋"].protein);
        const chickenNeeded = Math.ceil(pGap / FOOD_DATABASE["鸡腿"].protein);
        advice += `还差 ${pGap}g 蛋白质。建议补充：${eggsNeeded}个鸡蛋 或 ${chickenNeeded}个鸡腿。`;
    } else {
        advice += `蛋白质已达标！`;
    }

    if (cGap > 0) {
        advice += ` 热量还有 ${cGap}kcal 空间。`;
    } else {
        advice += ` 热量已超标！注意控制。`;
    }

    return {
        totalProtein,
        totalCalories,
        pGap,
        cGap,
        advice
    };
}

/**
 * INPUT PARSER (Very Basic NLP)
 * Tries to extract intent and data.
 */
export function parseInput(text) {
    // Check for diet keywords
    const foodKeywords = Object.keys(FOOD_DATABASE);
    const foundFoods = [];

    // Simple regex for "X个Y" or "Y X个"
    // E.g. "3个鸡蛋", "鸡蛋3个", "两片面包"
    // Mapping chinese numbers to digits is hard without a lib, simplified to Arabic numerals first or simple keywords

    // Simplified: Assume user inputs like "3个鸡蛋" or "250g米饭" (we handle "碗/个" mainly)
    // Let's just look for known foods and nearby numbers.

    let isDiet = false;

    foodKeywords.forEach(food => {
        if (text.includes(food)) {
            isDiet = true;
            // Try to find a number before it
            // Regex: (\d+)\s*[个|碗|片|条]?\s*food OR food\s*(\d+)
            // Also match "两/三" for 2/3
            // Very hacky parser for demo
            const nearbyNumber = 1; // Default
            // TODO: Implement better number extraction if time permits.
            foundFoods.push({ food, count: nearbyNumber });
        }
    });

    if (isDiet) {
        return { type: 'diet', data: foundFoods };
    }

    // Check for training keywords
    if (text.includes("练") || text.includes("卧推") || text.includes("Day") || text.includes("day")) {
        // Check if it's a query
        if (text.includes("明天") || text.includes("建议") || text.includes("什么") || text.includes("计划")) {
            return { type: 'query_training' };
        }

        // Training Log Parsing attempt
        // Pattern: Exercise (Optional), Weight (Optional), Reps (Required)
        // Try to match "50kg" -> weight
        // Try to match "8,8,8,7" or "12 12 12 12" -> reps

        const weightMatch = text.match(/(\d+(\.\d+)?)kg/i);
        const weight = weightMatch ? parseFloat(weightMatch[1]) : null;

        // Reps matching: looking for sequence of numbers separated by comma or space
        // E.g. "8,8,8,7" or "12 12 12 12"
        const repsMatch = text.match(/(\d+)[,，\s]+(\d+)[,，\s]+(\d+)[,，\s]+(\d+)/);
        // Or just capture all numbers if vague

        let reps = [];
        if (repsMatch) {
            reps = [parseInt(repsMatch[1]), parseInt(repsMatch[2]), parseInt(repsMatch[3]), parseInt(repsMatch[4])];
        }

        // Identify exercise? tough without NER. 
        // We'll rely on current day context in the main app loop or just generic logging for now.
        // For the demo: just return the extracted numbers.

        return {
            type: 'log_training',
            data: { weight, reps, raw: text }
        };
    }

    return { type: 'chat', text };
}
