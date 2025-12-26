import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import Typer from './Typer';
import ProfilePage from './ProfilePage';

import API_BASE_URL from '../config';

const ChatInterface = ({ authToken, onLogout }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: `您好！我是小鱼飞飞 🐟\n正在从数据库读取您的历史记录...` }
    ]);
    const [showProfile, setShowProfile] = useState(false);
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
                // Convert Excel rows to simplified chat history if needed, 
                // or just welcome user. 
                // For now, let's just update the welcome message based on recent logs.
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
        // 1. Add User Message
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text }]);

        try {
            // 2. Call API with 60s timeout
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

            // 3. Add AI Response
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: data.reply }]);

        } catch (err) {
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: "❌ 发送失败，后台服务未响应。" }]);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', maxWidth: '800px', margin: '0 auto', background: 'transparent', position: 'relative' }}>
            {/* Header with logout button */}
            <div style={{
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #039be5 0%, #0288d1 100%)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '15px 15px 0 0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>小鱼飞飞 🐟</h2>
                    <p style={{ margin: '2px 0 0 0', fontSize: '12px', opacity: 0.85 }}>
                        {localStorage.getItem('username') || '用户'}
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => setShowProfile(true)}
                        style={{
                            background: 'rgba(255,255,255,0.25)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.35)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.25)'}
                    >
                        ⚙️ 设置
                    </button>
                    <button
                        onClick={onLogout}
                        style={{
                            background: 'rgba(255,255,255,0.25)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.35)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.25)'}
                    >
                        切换账号
                    </button>
                </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '80px' }}>
                {messages.map(m => <MessageBubble key={m.id} message={m} />)}
                <div ref={messagesEndRef} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Typer onSend={handleSend} />
            </div>

            {/* Profile Page Overlay */}
            {showProfile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1000,
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(5px)'
                }}>
                    <ProfilePage
                        authToken={authToken}
                        onClose={() => setShowProfile(false)}
                        onUpdate={() => {
                            // Optionally refresh chat or show a message
                            console.log('Profile updated!');
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ChatInterface;
