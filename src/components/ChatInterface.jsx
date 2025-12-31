import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import MessageBubble from './MessageBubble';
import Typer from './Typer';
import ProfilePage from './ProfilePage';
import DailyLog from './DailyLog';

import API_BASE_URL from '../config';

const ChatInterface = ({ authToken, onLogout }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: `您好！我是小鱼飞飞 🐟\n正在从数据库读取您的历史记录...` }
    ]);
    const [showProfile, setShowProfile] = useState(false);
    const [showDailyLog, setShowDailyLog] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    // Load History on Mount
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/history`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const lastLog = data[data.length - 1];
                    setMessages([{
                        id: 1,
                        sender: 'ai',
                        text: `欢迎回来！\n检测到上一次记录是：${lastLog.Date} ${lastLog.TimeOfDay} (${lastLog.Type})\n"${lastLog.Content}"\n\n今天想记录什么？`
                    }]);
                } else {
                    setMessages([{
                        id: 1,
                        sender: 'ai',
                        text: `欢迎！我是小鱼飞飞🐟  \n正在从数据库读取您的历史记录...\n目前还是空的，请告诉我您今天练了什么或吃了什么？`
                    }]);
                }
            })
            .catch(err => {
                console.error(err);
                setMessages([{ id: 1, sender: 'ai', text: `⚠️ 无法连接到后台服务。\n请确认您运行了 npm start 在 server 目录下。` }]);
            });
    }, []);

    const handleSend = async (text) => {
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text }]);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 60000);

            const res = await fetch(`${API_BASE_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ message: text }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            const data = await res.json();
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: data.reply }]);

        } catch (err) {
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: "❌ 发送失败，后台服务未响应。" }]);
        }
    };

    return (
        <div className="animate-entry" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
        }}>
            {/* Floating Glass Header */}
            <div className="glass-card" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '20px',
                zIndex: 100,
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '16px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '40px', height: '40px', background: '#fff', borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'
                    }}>🐟</div>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>小鱼飞飞</h2>
                        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                            {localStorage.getItem('username') || '用户'} • 在线
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => setShowDailyLog(true)}
                        style={{
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid white',
                            color: 'var(--text-primary)',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                        }}
                    >
                        📋清单
                    </button>
                    <button
                        onClick={() => setShowProfile(true)}
                        style={{
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid white',
                            color: 'var(--text-primary)',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                        }}
                    >
                        ⚙️设置
                    </button>
                    <button
                        onClick={onLogout}
                        style={{
                            background: 'var(--accent-color)',
                            border: 'none',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 12px rgba(0, 229, 255, 0.3)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 6px 16px rgba(0, 229, 255, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 12px rgba(0, 229, 255, 0.3)';
                        }}
                    >
                        退出
                    </button>
                </div>
            </div>

            {/* Chat Area - Added top padding for floating header */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '100px 20px 100px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                {messages.map((m, index) => (
                    <div key={m.id} style={{
                        animation: `fadeInUp 0.5s var(--ease-out-back) forwards`,
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0
                    }}>
                        <MessageBubble message={m} />
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 101 }}>
                <Typer onSend={handleSend} />
            </div>

            {/* Profile Overlay - Portal to body */}
            {showProfile && ReactDOM.createPortal(
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    zIndex: 9999, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <ProfilePage
                        authToken={authToken}
                        onClose={() => setShowProfile(false)}
                        onUpdate={() => console.log('Profile updated!')}
                    />
                </div>,
                document.body
            )}

            {/* Daily Log Overlay - Portal to body */}
            {showDailyLog && ReactDOM.createPortal(
                <DailyLog authToken={authToken} onClose={() => setShowDailyLog(false)} />,
                document.body
            )}
        </div>
    );
};

export default ChatInterface;
