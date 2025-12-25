import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'fitness_diet',
    port: process.env.DB_PORT || 3306,
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

// Initialize users table
export const initUsersTable = async () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);
        console.log('✅ Users table verified/created');
    } catch (error) {
        console.error('❌ Users table creation failed:', error.message);
    }
};

// Register new user
export const registerUser = async (username, password) => {
    try {
        // Check if username exists
        const [existing] = await pool.query('SELECT id FROM users WHERE username = ?', [username]);
        if (existing.length > 0) {
            throw new Error('用户名已存在');
        }

        // Hash password
        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);

        // Insert user
        const [result] = await pool.execute(
            'INSERT INTO users (username, password_hash) VALUES (?, ?)',
            [username, password_hash]
        );

        console.log(`✅ User registered: ${username}`);
        return { success: true, userId: result.insertId };
    } catch (error) {
        console.error('Register Error:', error.message);
        throw error;
    }
};

// Login user
export const loginUser = async (username, password) => {
    try {
        // Find user
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            throw new Error('用户名或密码错误');
        }

        const user = rows[0];

        // Verify password
        const isValid = await bcrypt.compare(password, user.password_hash);
        if (!isValid) {
            throw new Error('用户名或密码错误');
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        console.log(`✅ User logged in: ${username}`);
        return { success: true, token, username: user.username };
    } catch (error) {
        console.error('Login Error:', error.message);
        throw error;
    }
};

// Verify JWT token
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { valid: true, username: decoded.username, userId: decoded.userId };
    } catch (error) {
        return { valid: false, error: error.message };
    }
};
