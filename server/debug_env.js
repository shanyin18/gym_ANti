import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('--- ENVIRONMENT DEBUG START ---');
console.log('Current Directory:', process.cwd());
console.log('Script Directory:', __dirname);

const envPath = path.join(process.cwd(), '.env');
console.log('Looking for .env at:', envPath);

try {
    if (fs.existsSync(envPath)) {
        console.log('✅ .env file found!');
        const content = fs.readFileSync(envPath, 'utf8');
        console.log('--- .env FILE CONTENT ---');
        console.log(content);
        console.log('-------------------------');
    } else {
        console.error('❌ .env file NOT found at expected path.');
        // Try looking in script directory
        const scriptEnvPath = path.join(__dirname, '.env');
        if (scriptEnvPath !== envPath && fs.existsSync(scriptEnvPath)) {
            console.log('⚠️ Found .env in script directory instead:', scriptEnvPath);
        }
    }
} catch (err) {
    console.error('Error reading .env file:', err.message);
}

console.log('Loading dotenv...');
const result = dotenv.config();

if (result.error) {
    console.error('❌ dotenv config error:', result.error.message);
} else {
    console.log('✅ dotenv parsed keys:', Object.keys(result.parsed || {}));
}

console.log('Final DOUBAO_API_KEY:', process.env.DOUBAO_API_KEY ? 'Present (Starts with ' + process.env.DOUBAO_API_KEY.substring(0, 4) + ')' : 'MISSING');
console.log('Final DB_HOST:', process.env.DB_HOST);

console.log('--- ENVIRONMENT DEBUG END ---');
