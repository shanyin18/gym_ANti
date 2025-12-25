import React, { useState, useEffect } from 'react';

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

            const res = await fetch('http://localhost:3000/api/profile', {
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
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#039be5',
                fontSize: '18px'
            }}>
                加载中...
            </div>
        );
    }

    const goalLabels = {
        gain: '增肌💪',
        lose: '减脂🔥',
        maintain: '维持⚖️'
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                width: '500px',
                maxWidth: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            }}>
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'rgba(244, 67, 54, 0.2)',
                        border: '1px solid rgba(244, 67, 54, 0.5)',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        cursor: 'pointer',
                        fontSize: '20px',
                        color: '#c62828',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = 'rgba(244, 67, 54, 0.3)'}
                    onMouseOut={(e) => e.target.style.background = 'rgba(244, 67, 54, 0.2)'}
                >
                    ×
                </button>

                <h1 style={{
                    textAlign: 'center',
                    color: '#01579b',
                    marginBottom: '10px',
                    fontSize: '28px'
                }}>🐟 个人设置</h1>
                <p style={{
                    textAlign: 'center',
                    color: '#0277bd',
                    marginBottom: '30px',
                    fontSize: '14px'
                }}>修改您的个人信息和训练目标</p>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#01579b', fontWeight: 'bold', fontSize: '14px' }}>
                                年龄
                            </label>
                            <input
                                type="number"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                required
                                min="1"
                                max="120"
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

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#01579b', fontWeight: 'bold', fontSize: '14px' }}>
                                性别
                            </label>
                            <select
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
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
                            >
                                <option value="">请选择</option>
                                <option value="male">男 👨</option>
                                <option value="female">女 👩</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#01579b', fontWeight: 'bold', fontSize: '14px' }}>
                                身高 (cm)
                            </label>
                            <input
                                type="number"
                                value={formData.height}
                                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                required
                                min="100"
                                max="250"
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

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#01579b', fontWeight: 'bold', fontSize: '14px' }}>
                                体重 (kg)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                value={formData.weight}
                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                required
                                min="30"
                                max="200"
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
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '12px', color: '#01579b', fontWeight: 'bold', fontSize: '14px' }}>
                            训练目标
                        </label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {['gain', 'lose', 'maintain'].map(g => (
                                <button
                                    key={g}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, goal: g })}
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        borderRadius: '10px',
                                        border: formData.goal === g ? '2px solid #039be5' : '1px solid rgba(2, 119, 189, 0.3)',
                                        background: formData.goal === g ? 'rgba(3, 155, 229, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        color: formData.goal === g ? '#01579b' : '#0277bd'
                                    }}
                                >
                                    {goalLabels[g]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {calories > 0 && (
                        <div style={{
                            padding: '15px',
                            borderRadius: '10px',
                            background: 'rgba(76, 175, 80, 0.15)',
                            marginBottom: '20px',
                            border: '1px solid rgba(76, 175, 80, 0.3)'
                        }}>
                            <p style={{ margin: '0 0 8px 0', color: '#2e7d32', fontSize: '14px', fontWeight: 'bold' }}>
                                📊 新的推荐目标：
                            </p>
                            <p style={{ margin: 0, color: '#388e3c', fontSize: '16px' }}>
                                每日热量: <strong>{calories} kcal</strong> | 蛋白质: <strong>{protein} g</strong>
                            </p>
                        </div>
                    )}

                    {error && (
                        <div style={{
                            padding: '10px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(244, 67, 54, 0.2)',
                            color: '#c62828',
                            marginBottom: '20px',
                            fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                flex: 1,
                                padding: '14px',
                                borderRadius: '10px',
                                border: '1px solid rgba(2, 119, 189, 0.5)',
                                background: 'rgba(255, 255, 255, 0.5)',
                                color: '#0277bd',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            取消
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                flex: 2,
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
                            {loading ? '保存中...' : '保存修改 💾'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
