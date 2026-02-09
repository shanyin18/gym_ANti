const API_BASE_URL = import.meta.env.PROD
    ? 'https://gym-anti-backend.onrender.com'
    : 'http://127.0.0.1:8000';

export default API_BASE_URL;
