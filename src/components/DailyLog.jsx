import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';

const MEAL_ORDER = ['早餐', '午餐', '晚餐', '其他'];
const MEAL_ICONS = { '早餐': '🌅', '午餐': '☀️', '晚餐': '🌙', '其他': '🍽️' };

const DailyLog = ({ authToken, onClose }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/daily-log`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
            .then(res => res.json())
            .then(d => { setData(d); setLoading(false); })
            .catch(() => setLoading(false));
    }, [authToken]);

    if (loading) {
        return (
            <div style={overlayStyle}>
                <div className="glass-card animate-entry" style={cardStyle}>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>加载中...</p>
                </div>
            </div>
        );
    }

    const hasMeals = data && Object.keys(data.meals).length > 0;
    const target = data?.target || { calories: 2000, protein: 100 };
    const total = data?.total || { calories: 0, protein: 0 };

    const calPct = Math.min(100, Math.round((total.calories / target.calories) * 100));
    const proPct = Math.min(100, Math.round((total.protein / target.protein) * 100));
    const calRemain = Math.max(0, target.calories - total.calories);
    const proRemain = Math.max(0, target.protein - total.protein);

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div className="glass-card animate-entry" style={cardStyle} onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '20px', color: 'var(--text-primary)' }}>📋 今日饮食清单</h2>
                        <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>{data?.date}</p>
                    </div>
                    <button onClick={onClose} style={closeBtnStyle}>×</button>
                </div>

                {/* Progress Section */}
                <div style={{ background: 'rgba(0,0,0,0.03)', borderRadius: '16px', padding: '16px', marginBottom: '16px' }}>
                    <ProgressBar label="热量" icon="🔥" current={total.calories} target={target.calories} pct={calPct} remain={calRemain} unit="kcal" color="#ff7043" />
                    <ProgressBar label="蛋白质" icon="🥩" current={total.protein} target={target.protein} pct={proPct} remain={proRemain} unit="g" color="#42a5f5" />
                </div>

                {/* Meal List */}
                {!hasMeals ? (
                    <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--text-secondary)' }}>
                        <p style={{ fontSize: '36px', marginBottom: '8px' }}>🍽️</p>
                        <p style={{ margin: 0 }}>今天还没有饮食记录</p>
                    </div>
                ) : (
                    <div style={{ maxHeight: '40vh', overflowY: 'auto' }}>
                        {MEAL_ORDER.filter(m => data.meals[m]).map(meal => (
                            <MealSection key={meal} name={meal} icon={MEAL_ICONS[meal]} data={data.meals[meal]} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProgressBar = ({ label, icon, current, target, pct, remain, unit, color }) => (
    <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{icon} {label}</span>
            <span style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color }}>{current}</strong> / {target} {unit}
                <span style={{ marginLeft: '8px', background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>
                    {pct}%
                </span>
            </span>
        </div>
        <div style={{ height: '8px', background: 'rgba(0,0,0,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '4px', transition: 'width 0.5s ease' }} />
        </div>
        {remain > 0 && (
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'right' }}>
                还需摄入 <strong style={{ color }}>{remain}</strong> {unit}
            </p>
        )}
    </div>
);

const MealSection = ({ name, icon, data }) => (
    <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '14px' }}>{icon} {name}</span>
            <span style={{ fontSize: '12px', color: 'var(--accent-color)' }}>
                {data.subtotal.calories} kcal / {data.subtotal.protein}g
            </span>
        </div>
        {data.items.map((item, i) => (
            <div key={i} style={itemStyle}>
                <span style={{ flex: 1, color: 'var(--text-secondary)' }}>{item.content}</span>
                <span style={{ fontSize: '12px', color: '#888', whiteSpace: 'nowrap' }}>
                    {item.calories}kcal · {item.protein}g
                </span>
            </div>
        ))}
    </div>
);

// Styles
const overlayStyle = {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};

const cardStyle = {
    width: '420px', maxWidth: '90vw', padding: '24px', maxHeight: '85vh',
    display: 'flex', flexDirection: 'column'
};

const closeBtnStyle = {
    width: '32px', height: '32px', borderRadius: '50%', border: 'none',
    background: 'rgba(0,0,0,0.05)', fontSize: '20px', cursor: 'pointer',
    color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const itemStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '6px 10px', background: 'rgba(255,255,255,0.5)', borderRadius: '8px',
    marginBottom: '4px', fontSize: '13px'
};

export default DailyLog;
