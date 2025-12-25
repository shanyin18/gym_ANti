import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

// Initialize OpenAI client for Doubao
const client = new OpenAI({
  apiKey: process.env.DOUBAO_API_KEY,
  baseURL: "https://ark.cn-beijing.volces.com/api/v3",
});

const SYSTEM_PROMPT = `
你是一个专业的健身教练和营养师 AI，名叫"小鱼飞飞"。
用户的目标是：
- 身高 186cm, 体重 68kg (增肌期)。
- 每日目标: 热量 2800kcal, 蛋白质 150g。
- 训练循环: Day 1 (胸+三头), Day 2 (肩+腹), Day 3 (背+二头)。

你的任务是处理用户的自然语言输入，并返回 JSON 格式的数据供系统记录到数据库，同时给出一段自然的中文回复。

**重要：timeOfDay 判断逻辑**
根据用户提问的时间（会在下方提供）自动判断是哪一餐：
- 06:00-10:00 → "Morning" (早餐)
- 11:00-14:00 → "Noon" (午餐)  
- 17:00-20:00 → "Evening" (晚餐)
- 其他时间 → "Snack" (加餐)

如果用户明确说明了时间（如"中午吃了"、"晚上练了"），优先按用户说的来判断。

请严格以 JSON 格式返回，不要包含 markdown 代码块标记，直接返回 JSON 字符串。
返回格式:
{
  "logs": [
    {
      "timeOfDay": "Morning" | "Noon" | "Evening" | "Snack" (根据上述规则判断),
      "type": "Diet" | "Workout",
      "content": "摘要内容 (如: 3个鸡蛋)",
      "calories": 200 (预估值),
      "protein": 20 (预估值),
      "notes": "给用户的简短建议/评价"
    }
  ],
  "reply": "直接给用户的回复文本，包含分析和建议，语气亲切专业。"
}

逻辑规则：
1. **饮食逻辑**:
   - 必须基于"当前已摄入"（你可以自己假设或根据输入判断）来计算下一顿的建议。
   - 比如早上吃了很少，要提醒中午多吃。
   - 如果用户问"下一顿吃多少"，请根据剩余缺口计算。

2. **训练逻辑 (双重渐进法)**:
   - 如果用户记录了训练，请评价其负荷。
   - 比较上次训练（如果有提供Context）来建议加重或加次数。

当前时间: {{CURRENT_TIME}}

Context 数据 (该用户今日已记录到数据库):
`;

export const processWithAI = async (message, historyLogs, userProfile) => {
  try {
    // Get current time in Beijing timezone
    const now = new Date();
    const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const currentTime = beijingTime.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    // Build dynamic prompt based on user profile
    let dynamicPrompt = SYSTEM_PROMPT;

    if (userProfile) {
      const profileInfo = `
用户档案：
- 年龄: ${userProfile.age}岁
- 性别: ${userProfile.gender === 'male' ? '男' : '女'}
- 身高: ${userProfile.height}cm
- 体重: ${userProfile.weight}kg
- 目标: ${userProfile.goal}
- 每日热量目标: ${userProfile.daily_calories}kcal
- 每日蛋白质目标: ${userProfile.daily_protein}g
`;
      dynamicPrompt = dynamicPrompt.replace('用户的目标是：\n- 身高 186cm, 体重 68kg (增肌期)。\n- 每日目标: 热量 2800kcal, 蛋白质 150g。', profileInfo);
    }

    // Build context
    const contextData = historyLogs.map(log =>
      `${log.Date} ${log.TimeOfDay} - ${log.Type}: ${log.Content} (${log.Calories}kcal, ${log.Protein}g蛋白质)`
    ).join('\n');

    const fullSystemPrompt = dynamicPrompt.replace('{{CURRENT_TIME}}', currentTime) + '\n' + (contextData || '(暂无历史记录)');

    const completion = await client.chat.completions.create({
      messages: [
        { role: "system", content: fullSystemPrompt },
        { role: "user", content: message }
      ],
      model: "ep-20251223195501-9x6g5",
    });

    const text = completion.choices[0].message.content;
    console.log("Raw AI Response:", text);

    // Aggressive JSON extraction
    let bestParse = null;
    const firstOpen = text.indexOf('{');
    if (firstOpen !== -1) {
      let tempText = text.substring(firstOpen);
      const closingIndices = [];
      for (let i = 0; i < tempText.length; i++) {
        if (tempText[i] === '}') closingIndices.push(i);
      }

      for (let i = closingIndices.length - 1; i >= 0; i--) {
        const end = closingIndices[i];
        const candidate = tempText.substring(0, end + 1);
        try {
          bestParse = JSON.parse(candidate);
          break;
        } catch (e) { }
      }
    }

    if (!bestParse) throw new Error("Could not parse JSON from AI response");
    return bestParse;

  } catch (error) {
    console.error("AI Error:", error);
    fs.appendFileSync('server_error.log', `${new Date().toISOString()} - ${error.toString()}\n`);
    return {
      logs: [],
      reply: `抱歉，AI 服务暂时不可用 (${error.message})`
    };
  }
};
