import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import { getConfigByQuality } from './animationConfig';
import { useOceanMesh } from './hooks/useOceanMesh';
import { useCloudSystem } from './hooks/useCloudSystem';
import { useFishGroup } from './hooks/useFishGroup';
import { useTextFrame } from './hooks/useTextFrame';
import { useParticleSystem } from './hooks/useParticleSystem';
import { useAnimationSequence } from './hooks/useAnimationSequence';

/**
 * 着陆动画组件 - 重构版
 * 使用模块化 hooks 和配置驱动架构
 */
export default function LandingAnimation({ onComplete, quality = 'high' }) {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const reqIdRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [instruction, setInstruction] = useState('点击拉近视角 (CLICK TO ZOOM)');
    const [subInstruction, setSubInstruction] = useState('');

    // 获取配置 - 使用 useMemo 避免每次渲染重新创建
    const config = React.useMemo(() => getConfigByQuality(quality), [quality]);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // === 场景初始化 ===
        const scene = new THREE.Scene();
        const fogColor = new THREE.Color(config.scene.fogColor);
        scene.background = fogColor;
        scene.fog = new THREE.FogExp2(fogColor, config.scene.fogDensity.initial);
        sceneRef.current = scene;

        // === 相机 ===
        const camera = new THREE.PerspectiveCamera(
            config.camera.fov,
            width / height,
            config.camera.near,
            config.camera.far
        );
        camera.position.set(
            config.camera.initialPosition.x,
            config.camera.initialPosition.y,
            config.camera.initialPosition.z
        );
        cameraRef.current = camera;

        // === 渲染器 ===
        const renderer = new THREE.WebGLRenderer({
            antialias: config.renderer.antialias,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = config.renderer.shadows;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        rendererRef.current = renderer;

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // === 灯光 ===
        const ambientLight = new THREE.AmbientLight(
            config.lights.ambient.color,
            config.lights.ambient.intensity
        );
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(
            config.lights.directional.color,
            config.lights.directional.intensity
        );
        dirLight.position.set(
            config.lights.directional.position.x,
            config.lights.directional.position.y,
            config.lights.directional.position.z
        );
        if (config.renderer.shadows) {
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.set(
                config.lights.directional.shadowMapSize,
                config.lights.directional.shadowMapSize
            );
            dirLight.shadow.camera.top = config.lights.directional.shadowCameraSize;
            dirLight.shadow.camera.bottom = -config.lights.directional.shadowCameraSize;
        }
        scene.add(dirLight);

        // 场景初始化完成，隐藏 loading
        setLoading(false);

        // === 清理函数 ===
        const cleanup = () => {
            if (reqIdRef.current) {
                cancelAnimationFrame(reqIdRef.current);
            }
            if (mountRef.current && renderer.domElement) {
                if (mountRef.current.contains(renderer.domElement)) {
                    mountRef.current.removeChild(renderer.domElement);
                }
            }
            renderer.dispose();
            scene.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(m => m.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        };

        return cleanup;
    }, [quality]);

    // === 使用模块化 Hooks ===
    const { updateOcean, triggerImpact } = useOceanMesh(sceneRef.current, config.ocean);
    const cloudGroupRef = useCloudSystem(sceneRef.current, config.clouds);
    const fishGroupRef = useFishGroup(sceneRef.current, config.fish);
    const textPivotRef = useTextFrame(sceneRef.current, config.text);
    const { triggerSplash } = useParticleSystem(sceneRef.current, config.particles);

    const { animationStateRef, clockRef, handleClick, bindStateUpdaters } = useAnimationSequence(
        cameraRef.current,
        sceneRef.current,
        textPivotRef,
        triggerImpact,
        triggerSplash,
        config.animations,
        onComplete
    );

    // 绑定状态更新函数
    useEffect(() => {
        bindStateUpdaters(setInstruction, setSubInstruction);
    }, [bindStateUpdaters]);

    // === 渲染循环和交互 ===
    useEffect(() => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

        const scene = sceneRef.current;
        const camera = cameraRef.current;
        const renderer = rendererRef.current;
        const clock = new THREE.Clock();
        clockRef.current = clock;

        let mouseX = 0, mouseY = 0;
        const targetCamPos = new THREE.Vector3();

        const handleMouseMove = (e) => {
            if (animationStateRef.current === 0) {
                mouseX = (e.clientX - window.innerWidth / 2) * 0.1;
                mouseY = (e.clientY - window.innerHeight / 2) * 0.1;
            }
        };

        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        if (mountRef.current) {
            mountRef.current.addEventListener('click', handleClick);
        }

        // 动画循环
        const animate = () => {
            const time = clock.getElapsedTime();
            const state = animationStateRef.current;

            // 更新海洋
            updateOcean(time);

            // 相机和场景旋转
            if (state === 0) {
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (450 + mouseY * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(0, 0, 0);

                if (textPivotRef.current) {
                    textPivotRef.current.rotation.set(
                        Math.cos(time * 0.3) * 0.05,
                        Math.sin(time * 0.5) * 0.08,
                        0
                    );
                }

            } else if (state === 1) {
                // 状态 1：让 GSAP 完全控制相机位置，只更新 lookAt
                if (textPivotRef.current) {
                    camera.lookAt(textPivotRef.current.position);
                    textPivotRef.current.rotation.y = Math.sin(time * 0.8) * 0.1;
                }

            } else if (state === 2) {
                if (textPivotRef.current) {
                    targetCamPos.copy(textPivotRef.current.position).add(new THREE.Vector3(0, 200, 400));
                    camera.position.lerp(targetCamPos, 0.04);
                    camera.lookAt(textPivotRef.current.position);
                }
            }

            // 只保留飞鱼的持续旋转，云朵由 GSAP 单独控制避免冲突
            if (fishGroupRef.current) fishGroupRef.current.rotation.y = -time * 0.03;

            renderer.render(scene, camera);
            reqIdRef.current = requestAnimationFrame(animate);
        };

        reqIdRef.current = requestAnimationFrame(animate);

        return () => {
            if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeEventListener('click', handleClick);
            }
        };
    }, [updateOcean, handleClick, animationStateRef, clockRef, textPivotRef, cloudGroupRef, fishGroupRef]);

    // === 样式 ===
    const loadingStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#87CEEB',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 20,
        textAlign: 'center',
        color: '#01579b',
        fontWeight: 'bold',
        transition: 'opacity 0.5s',
        opacity: loading ? 1 : 0,
        pointerEvents: 'none'
    };

    const textStyle = {
        fontFamily: "'Impact', sans-serif",
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#01579b',
        textShadow: '0 1px 5px rgba(255,255,255,0.8)',
        fontSize: '1.2rem',
        position: 'absolute',
        top: '30px',
        width: '100%',
        textAlign: 'center',
        transition: 'opacity 0.5s'
    };

    const subTextStyle = {
        ...textStyle,
        top: '60px',
        color: '#d84315',
        fontSize: '1rem'
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', cursor: 'pointer' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

            <div style={loadingStyle}>正在构建世界...</div>

            <div style={{ ...textStyle, opacity: instruction ? 1 : 0 }}>
                {instruction}
            </div>
            <div style={{ ...subTextStyle, opacity: subInstruction ? 1 : 0 }}>
                {subInstruction}
            </div>
        </div>
    );
}

LandingAnimation.propTypes = {
    onComplete: PropTypes.func,
    quality: PropTypes.oneOf(['low', 'medium', 'high'])
};