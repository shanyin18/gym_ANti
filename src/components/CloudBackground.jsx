import React from 'react';

const CloudBackground = () => {
    // 生成一些随机的云朵位置
    const clouds = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 100}%`,
        duration: `${20 + Math.random() * 40}s`,
        delay: `-${Math.random() * 20}s`,
        scale: 0.5 + Math.random() * 1.5,
        opacity: 0.4 + Math.random() * 0.4
    }));

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', // 高端蓝天渐变
            overflow: 'hidden'
        }}>
            {/* 阳光特效 */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                filter: 'blur(20px)',
                opacity: 0.6
            }} />

            {clouds.map(cloud => (
                <div key={cloud.id} className="cloud-sprite" style={{
                    position: 'absolute',
                    top: cloud.top,
                    left: '-20%', // Start off screen
                    width: '200px',
                    height: '60px',
                    background: '#fff',
                    borderRadius: '100px',
                    filter: 'blur(8px)', // 增加一点梦幻感
                    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.4)',
                    opacity: cloud.opacity,
                    transform: `scale(${cloud.scale})`,
                    animation: `floatClouds ${cloud.duration} linear infinite`,
                    animationDelay: cloud.delay
                }}>
                    {/* 云朵细节 - 伪3D效果 */}
                    <div style={{ position: 'absolute', top: '-40%', left: '15%', width: '35%', height: '150%', background: '#fff', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', top: '-55%', left: '40%', width: '40%', height: '180%', background: '#fff', borderRadius: '50%' }}></div>
                </div>
            ))}

            <style>{`
        @keyframes floatClouds {
          0% { transform: translateX(-10vw) scale(var(--scale, 1)); }
          100% { transform: translateX(110vw) scale(var(--scale, 1)); }
        }
        .cloud-sprite {
          /* 确保子元素也能正确渲染 */
        }
      `}</style>
        </div>
    );
};

export default CloudBackground;
