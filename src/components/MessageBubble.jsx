import React from 'react';
import fishAvatar from '../assets/feiyu_avatar.png';

const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div style={{
            display: 'flex',
            justifyContent: isUser ? 'flex-end' : 'flex-start',
            alignItems: 'flex-end', // Avatar at bottom
            gap: '12px',
            padding: '4px 0'
        }}>
            {!isUser && (
                <div style={{
                    width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.8)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    background: 'white',
                    flexShrink: 0
                }}>
                    <img
                        src={fishAvatar}
                        alt="AI"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/45x45/png?text=Fish"; }}
                    />
                </div>
            )}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '75%',
                alignItems: isUser ? 'flex-end' : 'flex-start'
            }}>
                <div style={{
                    padding: '14px 20px',
                    borderRadius: '24px',
                    borderBottomRightRadius: isUser ? '4px' : '24px',
                    borderBottomLeftRadius: isUser ? '24px' : '4px',
                    background: isUser ? 'var(--user-msg-bg)' : 'var(--bot-msg-bg)',
                    color: isUser ? '#fff' : 'var(--text-secondary)',
                    boxShadow: isUser
                        ? '0 4px 15px rgba(3, 155, 229, 0.3)'
                        : '0 4px 20px rgba(0,0,0,0.05)',
                    border: !isUser ? '1px solid rgba(255,255,255,0.6)' : 'none',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    backdropFilter: !isUser ? 'blur(10px)' : 'none',
                    fontWeight: '500',
                    wordWrap: 'break-word',
                    textAlign: 'left'
                }}>
                    {message.text}
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
