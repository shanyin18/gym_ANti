import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const endpoint = isRegister ? '/api/register' : '/api/login';
            const res = await fetch(`http://localhost:3000${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || '操作失败');
            }

            if (isRegister) {
                setError('注册成功！请登录');
                setIsRegister(false);
                setPassword('');
            } else {
                // Login success
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
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                width: '400px',
                maxWidth: '90%'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    color: '#01579b',
                    marginBottom: '10px',
                    fontSize: '28px'
                }}>小鱼飞飞</h1>
                <p style={{
                    textAlign: 'center',
                    color: '#0277bd',
                    marginBottom: '30px',
                    fontSize: '14px'
                }}>您的专属健身管家</p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#01579b', fontWeight: 'bold' }}>
                            用户名
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '10px',
                                border: '1px solid rgba(2, 119, 189, 0.3)',
                                background: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '16px',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#01579b', fontWeight: 'bold' }}>
                            密码
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '10px',
                                border: '1px solid rgba(2, 119, 189, 0.3)',
                                background: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '16px',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {error && (
                        <div style={{
                            padding: '10px',
                            borderRadius: '8px',
                            backgroundColor: error.includes('成功') ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
                            color: error.includes('成功') ? '#2e7d32' : '#c62828',
                            marginBottom: '20px',
                            fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '14px',
                            borderRadius: '10px',
                            border: 'none',
                            background: loading ? '#90caf9' : '#039be5',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 12px rgba(3, 155, 229, 0.3)'
                        }}
                    >
                        {loading ? '处理中...' : (isRegister ? '注册' : '登录')}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setError('');
                        }}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#0288d1',
                            cursor: 'pointer',
                            fontSize: '14px',
                            textDecoration: 'underline'
                        }}
                    >
                        {isRegister ? '已有账号？去登录' : '没有账号？去注册'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
