import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { processWithAI } from './aiHandler.js';
import { appendLog, getHistoryLogs, initDB, createUserTable } from './mysqlHandler.js';
import { registerUser, loginUser, verifyToken, initUsersTable } from './authHandler.js';
import { getProfile, saveProfile, initProfilesTable } from './profileHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Init DB & Users Table & Profiles on start
initDB();
initUsersTable();
initProfilesTable();

// Rate limiters
const chatLimiter = rateLimit({
    windowMs: 60 * 1000, // 1分钟
    max: 10, // 最多10次
    message: { error: '请求过于频繁，请稍后再试' },
    standardHeaders: true,
    legacyHeaders: false,
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分钟
    max: 5, // 最多5次（防暴力破解）
    message: { error: '登录尝试次数过多，请15分钟后再试' },
    standardHeaders: true,
    legacyHeaders: false,
});

const generalLimiter = rateLimit({
    windowMs: 60 * 1000, // 1分钟
    max: 30, // 通用接口限制
    standardHeaders: true,
    legacyHeaders: false,
});

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: '需要登录' });
    }

    const verification = verifyToken(token);
    if (!verification.valid) {
        return res.status(403).json({ error: '登录已过期' });
    }

    req.user = verification; // Attach user info to request
    next();
};

// Endpoint: Register
app.post('/api/register', authLimiter, async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: '用户名和密码不能为空' });
        }

        const result = await registerUser(username, password);

        // Create user table
        await createUserTable(username);

        res.json({ success: true, message: '注册成功' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(400).json({ error: error.message });
    }
});

// Endpoint: Login
app.post('/api/login', authLimiter, async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: '用户名和密码不能为空' });
        }

        const result = await loginUser(username, password);
        res.json(result);
    } catch (error) {
        console.error('Login Error:', error);
        res.status(401).json({ error: error.message });
    }
});

// Endpoint: Get user profile (Protected)
app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const profile = await getProfile(username);
        res.json({ profile });
    } catch (error) {
        console.error('Get Profile Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint: Save user profile (Protected)
app.post('/api/profile', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const profileData = req.body;

        await saveProfile(username, profileData);
        res.json({ success: true, message: '档案保存成功' });
    } catch (error) {
        console.error('Save Profile Error:', error);
        res.status(400).json({ error: error.message });
    }
});

// Endpoint: Send a message (Protected)
app.post('/api/chat', authenticateToken, chatLimiter, async (req, res) => {
    try {
        const { message } = req.body;
        const username = req.user.username;

        console.log(`User Message (${username}):`, message);

        if (!message) return res.status(400).json({ error: "Message required" });

        // 0. Get user profile
        const userProfile = await getProfile(username);

        // 1. Get History Context for this user
        let historyLogs = [];
        try {
            historyLogs = await getHistoryLogs(username);
        } catch (dbErr) {
            console.error("DB Read Error:", dbErr);
        }

        // 2. Process with AI (pass profile)
        const aiResult = await processWithAI(message, historyLogs, userProfile);

        console.log("AI Result:", JSON.stringify(aiResult, null, 2));

        // 3. Save Logs to MySQL (user-specific table)
        if (aiResult.logs && aiResult.logs.length > 0) {
            for (const log of aiResult.logs) {
                try {
                    await appendLog(username, log);
                } catch (dbErr) {
                    console.error("MySQL Write Error:", dbErr.message);
                }
            }
        }

        // 4. Return Reply
        res.json({ reply: aiResult.reply, logs: aiResult.logs });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint: Get History (Protected)
app.get('/api/history', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const history = await getHistoryLogs(username);
        res.json(history);
    } catch (error) {
        console.error("History Error:", error);
        res.json([]);
    }
});

// Endpoint: Get Today's Logs for Daily Checklist (Protected)
app.get('/api/daily-log', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const { getTodayLogs } = await import('./mysqlHandler.js');
        const logs = await getTodayLogs(username);

        // Get user's target from profile
        const userProfile = await getProfile(username);
        const targetCalories = userProfile?.daily_calories || 2000;
        const targetProtein = userProfile?.daily_protein || 100;

        // Group by TimeOfDay (support both Chinese and English)
        const timeMapping = {
            'Breakfast': '早餐', 'Morning': '早餐', '早餐': '早餐', '早上': '早餐',
            'Lunch': '午餐', 'Noon': '午餐', 'Afternoon': '午餐', '午餐': '午餐', '中午': '午餐',
            'Dinner': '晚餐', 'Evening': '晚餐', '晚餐': '晚餐', '晚上': '晚餐',
            'Snack': '其他', '加餐': '其他'
        };
        const grouped = { 早餐: [], 午餐: [], 晚餐: [], 其他: [] };
        let totalCalories = 0, totalProtein = 0;

        for (const log of logs) {
            const normalizedMeal = timeMapping[log.TimeOfDay] || '其他';
            const meal = grouped[normalizedMeal];
            meal.push({
                content: log.Content,
                calories: log.Calories || 0,
                protein: log.Protein || 0
            });
            totalCalories += log.Calories || 0;
            totalProtein += log.Protein || 0;
        }

        // Calculate per-meal totals
        const result = {};
        for (const [meal, items] of Object.entries(grouped)) {
            if (items.length > 0) {
                result[meal] = {
                    items,
                    subtotal: {
                        calories: items.reduce((s, i) => s + i.calories, 0),
                        protein: items.reduce((s, i) => s + i.protein, 0)
                    }
                };
            }
        }

        res.json({
            date: new Date().toISOString().split('T')[0],
            meals: result,
            total: { calories: totalCalories, protein: totalProtein },
            target: { calories: targetCalories, protein: targetProtein }
        });
    } catch (error) {
        console.error("Daily Log Error:", error);
        res.json({ date: '', meals: {}, total: { calories: 0, protein: 0 }, target: { calories: 2000, protein: 100 } });
    }
});

// Health check endpoint
app.get('/health', async (req, res) => {
    try {
        // 简单的数据库连接测试
        const dbStatus = await initDB();
        res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            database: dbStatus ? 'connected' : 'disconnected',
            uptime: process.uptime()
        });
    } catch (error) {
        res.status(503).json({
            status: 'error',
            timestamp: new Date().toISOString(),
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
