import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create connect pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'fitness_diet',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Initialize DB (Check connection)
export const initDB = async () => {
    try {
        const [rows] = await pool.query('SELECT 1');
        console.log('✅ MySQL Database Connected Successfully');
        return true;
    } catch (error) {
        console.error('❌ MySQL Connection Failed:', error.message);
        return false;
    }
};

// Create user-specific table
export const createUserTable = async (username) => {
    try {
        // Sanitize username for table name (remove special chars)
        const tableName = `user_${username.replace(/[^a-zA-Z0-9]/g, '_')}_logs`;

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS ${tableName} (
                id INT AUTO_INCREMENT PRIMARY KEY,
                Date VARCHAR(50),
                TimeOfDay VARCHAR(50),
                Type VARCHAR(50),
                Content TEXT,
                Calories INT,
                Protein INT,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);
        console.log(`✅ Table ${tableName} verified/created`);
        return tableName;
    } catch (error) {
        console.error('Create User Table Error:', error.message);
        throw error;
    }
};

// Insert a single log entry (user-specific)
export const appendLog = async (username, logData) => {
    try {
        const tableName = `user_${username.replace(/[^a-zA-Z0-9]/g, '_')}_logs`;

        const query = `
            INSERT INTO ${tableName} (Date, TimeOfDay, Type, Content, Calories, Protein)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        // Ensure Date is formatted for MySQL (YYYY-MM-DD)
        let dateValue = logData.datetime || new Date().toISOString();
        if (dateValue.includes('T')) {
            dateValue = dateValue.split('T')[0];
        }

        const values = [
            dateValue,
            logData.timeOfDay || 'Unknown',
            logData.type || 'Note',
            logData.content || '',
            logData.calories || 0,
            logData.protein || 0
        ];

        const [result] = await pool.execute(query, values);
        console.log(`Log saved to ${tableName}, ID: ${result.insertId}`);
        return result;
    } catch (error) {
        console.error('MySQL Insert Error:', error.message);
        throw error;
    }
};

// Retrieve history logs (Last 20, user-specific)
export const getHistoryLogs = async (username) => {
    try {
        const tableName = `user_${username.replace(/[^a-zA-Z0-9]/g, '_')}_logs`;
        const [rows] = await pool.query(`SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 20`);
        return rows.reverse();
    } catch (error) {
        console.error('MySQL Read Error:', error.message);
        return [];
    }
};
