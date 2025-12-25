import React from 'react';
import fishAvatar from '../assets/feiyu_avatar.png'; // Updated avatar path

const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div style={{
            display: 'flex',
            justifyContent: isUser ? 'flex-end' : 'flex-start',
            marginBottom: '20px',
            animation: 'fadeIn 0.3s ease',
            alignItems: 'flex-start'
        }}>
            {!isUser && (
                <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                        width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden',
                        border: '2px solid white',
                        boxShadow: 'var(--glow-shadow)',
                        backgroundColor: '#fff'
                    }}>
                        {/* Fallback to text if image fails/not yet ready */}
                        <img
                            src={fishAvatar}
                            alt="飞羽"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/45x45/png?text=Fish"; }}
                        />
                    </div>
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '80%', alignItems: isUser ? 'flex-end' : 'flex-start' }}>
                {!isUser && <span style={{ fontSize: '12px', color: 'var(--text-primary)', marginBottom: '4px', marginLeft: '4px', fontWeight: 'bold' }}>小鱼飞飞</span>}

                <div style={{
                    padding: '14px 18px',
                    borderRadius: '20px',
                    borderTopRightRadius: isUser ? '4px' : '20px',
                    borderTopLeftRadius: isUser ? '20px' : '4px',
                    backgroundColor: isUser ? '#039be5' : 'var(--card-bg)', // Ocean blue for user
                    border: 'none',
                    color: isUser ? '#fff' : '#01579b',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    whiteSpace: 'pre-wrap',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    backdropFilter: 'blur(10px)'
                }}>
                    {message.text}
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default MessageBubble;
