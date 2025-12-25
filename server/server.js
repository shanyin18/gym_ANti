import express from 'express';
import cors from 'cors';
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
app.post('/api/register', async (req, res) => {
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
app.post('/api/login', async (req, res) => {
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
app.post('/api/chat', authenticateToken, async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
