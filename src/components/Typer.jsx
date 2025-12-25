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
            gap: '10px',
            padding: '20px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid var(--border-color)',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="输入训练记录或饮食..."
                style={{
                    flex: 1,
                    padding: '12px 20px',
                    borderRadius: '24px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--card-bg)',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
            <button type="submit" style={{
                padding: '12px 24px',
                borderRadius: '24px',
                border: 'none',
                backgroundColor: 'var(--accent-color)',
                color: '#000',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.1s'
            }}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            >
                发送
            </button>
        </form>
    );
};

export default Typer;
