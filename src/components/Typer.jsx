import React, { useState } from 'react';

const Typer = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '12px',
            padding: '24px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            alignItems: 'center'
        }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="今天练了什么？吃了什么？"
                style={{
                    flex: 1,
                    padding: '14px 24px',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text-primary)', // Use dark text for readability
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                }}
                onFocus={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 188, 212, 0.15)';
                    e.target.style.borderColor = 'var(--accent-color)';
                }}
                onBlur={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
            />
            <button type="submit"
                disabled={!text.trim()}
                style={{
                    padding: '14px 28px',
                    borderRadius: '24px',
                    border: 'none',
                    background: text.trim() ? 'var(--accent-color)' : 'rgba(0,0,0,0.1)',
                    color: 'white',
                    fontWeight: '600',
                    cursor: text.trim() ? 'pointer' : 'default',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontSize: '16px',
                    boxShadow: text.trim() ? '0 4px 12px rgba(0, 188, 212, 0.3)' : 'none',
                    transform: 'scale(1)'
                }}
                onMouseEnter={(e) => text.trim() && (e.target.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = text.trim() ? 'var(--accent-color)' : 'rgba(0,0,0,0.1)';
                }}
                onMouseDown={(e) => text.trim() && (e.target.style.transform = 'scale(0.96)')}
                onMouseUp={(e) => text.trim() && (e.target.style.transform = 'translateY(-2px) scale(1)')}
            >
                发送
            </button>
        </form>
    );
};

export default Typer;
