import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'fitness_diet',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Initialize user_profiles table
export const initProfilesTable = async () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS user_profiles (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                age INT,
                gender VARCHAR(10),
                height INT,
                weight DECIMAL(5,2),
                goal VARCHAR(20),
                daily_calories INT,
                daily_protein INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);
        console.log('✅ User profiles table verified/created');
    } catch (error) {
        console.error('❌ Profile table creation failed:', error.message);
    }
};

// Get user profile
export const getProfile = async (username) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user_profiles WHERE username = ?', [username]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error('Get Profile Error:', error.message);
        return null;
    }
};

// Save/Update user profile
export const saveProfile = async (username, profileData) => {
    try {
        const { age, gender, height, weight, goal, daily_calories, daily_protein } = profileData;

        // Check if profile exists
        const existing = await getProfile(username);

        if (existing) {
            // Update
            await pool.execute(
                `UPDATE user_profiles SET age=?, gender=?, height=?, weight=?, goal=?, daily_calories=?, daily_protein=?, updated_at=NOW() WHERE username=?`,
                [age, gender, height, weight, goal, daily_calories, daily_protein, username]
            );
            console.log(`✅ Profile updated for ${username}`);
        } else {
            // Insert
            await pool.execute(
                `INSERT INTO user_profiles (username, age, gender, height, weight, goal, daily_calories, daily_protein) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [username, age, gender, height, weight, goal, daily_calories, daily_protein]
            );
            console.log(`✅ Profile created for ${username}`);
        }

        return { success: true };
    } catch (error) {
        console.error('Save Profile Error:', error.message);
        throw error;
    }
};

// Check if user has profile
export const hasProfile = async (username) => {
    const profile = await getProfile(username);
    return profile !== null;
};
