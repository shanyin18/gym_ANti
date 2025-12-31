import React, { useState } from 'react';
import API_BASE_URL from '../config';

const LoginPage = ({ onLogin }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const endpoint = isRegistering ? '/api/register' : '/api/login';

        try {
            const res = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || '操作失败');
            }

            if (isRegistering) {
                setError('注册成功！请登录');
                setIsRegistering(false);
                setPassword('');
            } else {
                localStorage.setItem('auth_token', data.token);
                localStorage.setItem('username', data.username);
                onLogin(data.token);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'
        }}>
            <div className="glass-card animate-entry" style={{
                padding: '48px',
                width: '380px',
                maxWidth: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '80px', height: '80px', background: 'linear-gradient(135deg, #fff 0%, #e3f2fd 100%)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '40px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', marginBottom: '24px'
                }}>
                    🐟
                </div>

                <h1 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '24px', fontWeight: 'bold' }}>
                    {isRegistering ? '加入旅程' : '欢迎回来'}
                </h1>
                <p style={{ margin: '0 0 32px 0', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    {isRegistering ? '创建您的健身档案' : '登录以继续您的训练'}
                </p>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="用户名"
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="密码"
                            required
                            style={inputStyle}
                        />
                    </div>

                    {error && (
                        <div style={{
                            padding: '12px', borderRadius: '12px', marginBottom: '20px', fontSize: '13px', textAlign: 'center',
                            background: error.includes('成功') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                            color: error.includes('成功') ? '#2e7d32' : '#c62828',
                            border: `1px solid ${error.includes('成功') ? '#c8e6c9' : '#ffcdd2'}`
                        }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%', padding: '16px', borderRadius: '16px', border: 'none',
                            background: 'var(--accent-color)', color: 'white', fontSize: '16px', fontWeight: '600',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.7 : 1,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)'
                        }}
                        onMouseOver={(e) => !loading && (e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 8px 20px rgba(0, 188, 212, 0.4)')}
                        onMouseOut={(e) => !loading && (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = '0 4px 12px rgba(0, 188, 212, 0.3)')}
                    >
                        {loading ? '处理中...' : (isRegistering ? '立即注册' : '登录')}
                    </button>
                </form>

                <button
                    onClick={() => { setIsRegistering(!isRegistering); setError(''); }}
                    style={{
                        background: 'none', border: 'none', color: 'var(--text-secondary)',
                        cursor: 'pointer', fontSize: '14px', marginTop: '24px', fontWeight: '500',
                        transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                    {isRegistering ? '已有账号？去登录' : '没有账号？注册新用户'}
                </button>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '16px',
    border: '2px solid transparent',
    background: 'rgba(255, 255, 255, 0.5)',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    color: '#333'
};

export default LoginPage;
