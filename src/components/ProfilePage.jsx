import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';

const ProfilePage = ({ authToken, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        height: '',
        weight: '',
        goal: 'gain'
    });
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingProfile, setLoadingProfile] = useState(true);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/profile`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            const data = await res.json();

            if (data.profile) {
                const goalMap = { '增肌': 'gain', '减脂': 'lose', '维持': 'maintain' };
                setFormData({
                    age: data.profile.age,
                    gender: data.profile.gender,
                    height: data.profile.height,
                    weight: data.profile.weight,
                    goal: goalMap[data.profile.goal] || 'gain'
                });
                setCalories(data.profile.daily_calories);
                setProtein(data.profile.daily_protein);
            }
        } catch (err) {
            console.error('Load profile error:', err);
        } finally {
            setLoadingProfile(false);
        }
    };

    const calculateTargets = () => {
        const { age, gender, height, weight, goal } = formData;
        if (!age || !gender || !height || !weight) return;

        const ageNum = parseInt(age);
        const heightNum = parseInt(height);
        const weightNum = parseFloat(weight);

        let bmr;
        if (gender === 'male') {
            bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
        } else {
            bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
        }

        let targetCalories, targetProtein;

        if (goal === 'gain') {
            targetCalories = Math.round(bmr * 1.6);
            targetProtein = Math.round(weightNum * 2.0);
        } else if (goal === 'lose') {
            targetCalories = Math.round(bmr * 1.3);
            targetProtein = Math.round(weightNum * 1.8);
        } else {
            targetCalories = Math.round(bmr * 1.5);
            targetProtein = Math.round(weightNum * 1.5);
        }

        setCalories(targetCalories);
        setProtein(targetProtein);
    };

    useEffect(() => {
        calculateTargets();
    }, [formData.age, formData.gender, formData.height, formData.weight, formData.goal]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const profileData = {
                age: parseInt(formData.age),
                gender: formData.gender,
                height: parseInt(formData.height),
                weight: parseFloat(formData.weight),
                goal: formData.goal === 'gain' ? '增肌' : (formData.goal === 'lose' ? '减脂' : '维持'),
                daily_calories: calories,
                daily_protein: protein
            };

            const res = await fetch(`${API_BASE_URL}/api/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(profileData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || '保存失败');
            }

            onUpdate(); // Notify parent to refresh
            onClose(); // Close the page
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loadingProfile) {
        return (
            <div style={{
                width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'
            }}>
                <div style={{ padding: '20px', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', backdropFilter: 'blur(5px)' }}>
                    加载中...
                </div>
            </div>
        );
    }

    const goalLabels = {
        gain: '增肌💪',
        lose: '减脂🔥',
        maintain: '维持⚖️'
    };

    return (
        <div className="glass-card animate-entry" style={{
            padding: '32px',
            width: '500px',
            maxWidth: '90vw',
            maxHeight: '85vh',
            overflowY: 'auto',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.85)'
        }}>
            {/* Close button */}
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%',
                    width: '32px', height: '32px', cursor: 'pointer', fontSize: '18px', color: '#666',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
                }}
                onMouseOver={(e) => { e.target.style.background = 'rgba(244, 67, 54, 0.1)'; e.target.style.color = '#d32f2f'; }}
                onMouseOut={(e) => { e.target.style.background = 'rgba(0,0,0,0.05)'; e.target.style.color = '#666'; }}
            >
                ×
            </button>

            <h1 style={{
                textAlign: 'center', color: 'var(--text-primary)', marginBottom: '8px', fontSize: '24px'
            }}>🐟 个人设置</h1>
            <p style={{
                textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px'
            }}>修改您的个人信息和训练目标</p>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                        <label style={labelStyle}>年龄</label>
                        <input
                            type="number"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            required
                            min="1" max="120"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>性别</label>
                        <select
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            required
                            style={inputStyle}
                        >
                            <option value="">请选择</option>
                            <option value="male">男 👨</option>
                            <option value="female">女 👩</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    <div>
                        <label style={labelStyle}>身高 (cm)</label>
                        <input
                            type="number"
                            value={formData.height}
                            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                            required
                            min="100" max="250"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>体重 (kg)</label>
                        <input
                            type="number"
                            step="0.1"
                            value={formData.weight}
                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            required
                            min="30" max="200"
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                    <label style={labelStyle}>训练目标</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {['gain', 'lose', 'maintain'].map(g => (
                            <button
                                key={g}
                                type="button"
                                onClick={() => setFormData({ ...formData, goal: g })}
                                style={{
                                    flex: 1, padding: '12px', borderRadius: '12px',
                                    border: formData.goal === g ? '2px solid var(--accent-color)' : '1px solid rgba(0,0,0,0.1)',
                                    background: formData.goal === g ? 'rgba(0, 188, 212, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                                    fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                                    color: formData.goal === g ? 'var(--text-primary)' : 'var(--text-secondary)'
                                }}
                            >
                                {goalLabels[g]}
                            </button>
                        ))}
                    </div>
                </div>

                {calories > 0 && (
                    <div style={{
                        padding: '16px', borderRadius: '16px', background: 'rgba(76, 175, 80, 0.1)',
                        marginBottom: '24px', border: '1px solid rgba(76, 175, 80, 0.3)', textAlign: 'center'
                    }}>
                        <p style={{ margin: '0 0 8px 0', color: '#2e7d32', fontSize: '14px', fontWeight: 'bold' }}>
                            📊 推荐摄入量
                        </p>
                        <p style={{ margin: 0, color: '#1b5e20', fontSize: '18px' }}>
                            🔥 <strong>{calories}</strong> kcal  &nbsp;|&nbsp;  🥩 <strong>{protein}</strong> g
                        </p>
                    </div>
                )}

                {error && (
                    <div style={{
                        padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(244, 67, 54, 0.1)',
                        color: '#c62828', marginBottom: '20px', fontSize: '14px', textAlign: 'center', border: '1px solid #ffcdd2'
                    }}>
                        {error}
                    </div>
                )}

                <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            flex: 1, padding: '14px', borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255, 255, 255, 0.5)',
                            color: 'var(--text-secondary)', fontSize: '15px', fontWeight: '600',
                            cursor: 'pointer', transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.8)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.5)'}
                    >
                        取消
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            flex: 2, padding: '14px', borderRadius: '12px', border: 'none',
                            background: 'var(--accent-color)', color: 'white', fontSize: '15px', fontWeight: '600',
                            cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s',
                            boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)', opacity: loading ? 0.7 : 1
                        }}
                        onMouseOver={(e) => !loading && (e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 8px 20px rgba(0, 188, 212, 0.4)')}
                        onMouseOut={(e) => !loading && (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = '0 4px 12px rgba(0, 188, 212, 0.3)')}
                    >
                        {loading ? '保存中...' : '保存修改 💾'}
                    </button>
                </div>
            </form>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '12px', borderRadius: '12px',
    border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255, 255, 255, 0.5)',
    fontSize: '15px', outline: 'none', boxSizing: 'border-box',
    transition: 'all 0.2s', color: 'var(--text-primary)'
};

const labelStyle = {
    display: 'block', marginBottom: '8px', color: 'var(--text-primary)', fontWeight: '600', fontSize: '13px'
};

export default ProfilePage;
