export const TRAINING_PLAN = {
    1: {
        name: "Day 1: 胸部 + 三头肌",
        exercises: [
            { id: 'd1_1', name: "平板杠铃卧推", sets: 4, minReps: 6, maxReps: 8, baseWeight: 50 },
            { id: 'd1_2', name: "上斜哑铃/杠铃卧推", sets: 3, minReps: 8, maxReps: 12, baseWeight: 20 },
            { id: 'd1_3', name: "器械夹胸/飞鸟", sets: 3, minReps: 12, maxReps: 15, baseWeight: 15 },
            { id: 'd1_4', name: "绳索下压", sets: 4, minReps: 10, maxReps: 12, baseWeight: 15 },
            { id: 'd1_5', name: "颈后臂屈伸", sets: 3, minReps: 10, maxReps: 12, baseWeight: 10 }
        ]
    },
    2: {
        name: "Day 2: 肩部 + 腹部",
        exercises: [
            { id: 'd2_1', name: "坐姿推举", sets: 4, minReps: 8, maxReps: 10, baseWeight: 20 },
            { id: 'd2_2', name: "哑铃侧平举", sets: 5, minReps: 12, maxReps: 15, baseWeight: 5 },
            { id: 'd2_3', name: "面拉/俯身飞鸟", sets: 3, minReps: 15, maxReps: 20, baseWeight: 10 },
            { id: 'd2_4', name: "悬垂举腿", sets: 3, minReps: 10, maxReps: 20, baseWeight: 0, isBodyweight: true }, // "Force failure" treated as high reps cap for simplicity
            { id: 'd2_5', name: "卷腹", sets: 3, minReps: 15, maxReps: 20, baseWeight: 0, isBodyweight: true }
        ]
    },
    3: {
        name: "Day 3: 背部 + 二头肌",
        exercises: [
            { id: 'd3_1', name: "助力引体向上", sets: 4, minReps: 8, maxReps: 10, baseWeight: 40, isAssisted: true },
            { id: 'd3_2', name: "划船", sets: 4, minReps: 10, maxReps: 12, baseWeight: 40 },
            { id: 'd3_3', name: "高位下拉", sets: 3, minReps: 12, maxReps: 15, baseWeight: 35 },
            { id: 'd3_4', name: "杠铃弯举", sets: 4, minReps: 8, maxReps: 10, baseWeight: 20 },
            { id: 'd3_5', name: "锤式弯举", sets: 3, minReps: 10, maxReps: 12, baseWeight: 10 }
        ]
    }
};

export const USER_PROFILE = {
    height: 186,
    weight: 68,
    goals: {
        calories: 2800,
        protein: 150,
        carbs: 400
    }
};

export const FOOD_DATABASE = {
    "鸡蛋": { protein: 7, calories: 70, unit: "个" },
    "鸡腿": { protein: 20, calories: 250, unit: "个" },
    "鸭腿": { protein: 25, calories: 300, unit: "个" },
    "鱼": { protein: 20, calories: 150, unit: "条" }, // Simplified
    "米饭": { protein: 4, calories: 220, carbs: 50, unit: "碗" },
    "面包": { protein: 3, calories: 100, carbs: 15, unit: "片" }
};
