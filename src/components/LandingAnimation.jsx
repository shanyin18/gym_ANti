import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function LandingAnimation({ onComplete }) {
    const mountRef = useRef(null);
    const reqIdRef = useRef(null); // 存储动画 ID 用于清理
    const [loading, setLoading] = useState(true);
    const [instruction, setInstruction] = useState('点击拉近视角 (CLICK TO ZOOM)');
    const [subInstruction, setSubInstruction] = useState('');

    useEffect(() => {
        // --- 1. 初始化场景变量 ---
        const width = window.innerWidth;
        const height = window.innerHeight;

        // 场景与相机
        const scene = new THREE.Scene();
        const fogColor = new THREE.Color(0x87CEEB);
        scene.background = fogColor;
        scene.fog = new THREE.FogExp2(fogColor, 0.0015);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 6000);
        camera.position.set(0, 450, 950);

        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;

        // 挂载到 DOM
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // --- 2. 灯光系统 ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(300, 800, 400);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.set(1024, 1024);
        dirLight.shadow.camera.top = 2000; dirLight.shadow.camera.bottom = -2000;
        scene.add(dirLight);

        // --- 3. 核心几何体复用 ---
        const unitBoxGeo = new THREE.BoxGeometry(1, 1, 1);

        // --- 4. 像素大海 ---
        const oceanSize = 80;
        const spacing = 35;
        const instanceCount = oceanSize * oceanSize;
        const oceanGeo = new THREE.BoxGeometry(30, 150, 30);
        const oceanMat = new THREE.MeshStandardMaterial({ color: 0x0077be, roughness: 0.8, flatShading: true });
        const oceanMesh = new THREE.InstancedMesh(oceanGeo, oceanMat, instanceCount);
        oceanMesh.receiveShadow = true;
        scene.add(oceanMesh);

        const dummy = new THREE.Object3D();
        const positions = [];
        for (let x = 0; x < oceanSize; x++) {
            for (let z = 0; z < oceanSize; z++) {
                positions.push({
                    x: (x - oceanSize / 2) * spacing,
                    z: (z - oceanSize / 2) * spacing,
                    distToCenter: Math.sqrt(((x - oceanSize / 2) * spacing) ** 2 + ((z - oceanSize / 2) * spacing) ** 2)
                });
            }
        }

        // --- 5. 云朵 ---
        const cloudGroup = new THREE.Group();
        scene.add(cloudGroup);
        const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x222222, roughness: 1.0, flatShading: true });
        const cloudGeo = new THREE.BoxGeometry(10, 10, 10);

        function createCloudCluster(x, y, z) {
            const cluster = new THREE.Group();
            cluster.position.set(x, y, z);
            const chunks = Math.floor(Math.random() * 5) + 5;
            for (let i = 0; i < chunks; i++) {
                const mesh = new THREE.Mesh(cloudGeo, cloudMat);
                mesh.position.set((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 18);
                mesh.castShadow = true; mesh.receiveShadow = true;
                cluster.add(mesh);
            }
            cloudGroup.add(cluster);
            const scale = 1.0 + Math.pow(Math.random(), 2) * 6.0;
            cluster.scale.set(scale, scale, scale);
            gsap.to(cluster.position, { y: y + 20 + Math.random() * 30, duration: 6 + Math.random() * 8, yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(cluster.rotation, { y: Math.random() * 0.5, duration: 20 + Math.random() * 20, yoyo: true, repeat: -1, ease: "sine.inOut" });
        }
        for (let i = 0; i < 40; i++) {
            createCloudCluster((Math.random() - 0.5) * 2000, 250 + Math.random() * 600, (Math.random() - 0.5) * 1500 - 200);
        }

        // --- 6. 飞鱼 (特定双色) ---
        const fishGroup = new THREE.Group();
        scene.add(fishGroup);
        const fishWingMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.9, side: THREE.DoubleSide, flatShading: true });
        const fishEyeMat = new THREE.MeshStandardMaterial({ color: 0x111111, flatShading: true });

        function createDetailedFish(x, y, z, scale, colorHex) {
            const fish = new THREE.Group();
            fish.position.set(x, y, z);
            const bodyMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4, flatShading: true });

            // 身体构建
            const body = new THREE.Mesh(unitBoxGeo, bodyMat); body.scale.set(14, 5, 5); fish.add(body);
            const tailStub = new THREE.Mesh(unitBoxGeo, bodyMat); tailStub.scale.set(3, 3, 3); tailStub.position.set(-8.5, 0, 0); fish.add(tailStub);
            const tailFin = new THREE.Mesh(unitBoxGeo, bodyMat); tailFin.scale.set(2, 8, 1); tailFin.position.set(-10, 1, 0); tailFin.rotation.z = 0.2; fish.add(tailFin);
            const eyes = new THREE.Mesh(unitBoxGeo, fishEyeMat); eyes.scale.set(1, 1.5, 5.2); eyes.position.set(4, 1, 0); fish.add(eyes);

            // 翅膀
            const wingGroup = new THREE.Group();
            const w1 = new THREE.Mesh(unitBoxGeo, fishWingMat); w1.scale.set(5, 1, 6); w1.position.set(1, 0, 3); wingGroup.add(w1);
            const w2 = new THREE.Mesh(unitBoxGeo, fishWingMat); w2.scale.set(4, 1, 6); w2.position.set(-1, 0, 8); wingGroup.add(w2);
            const w3 = new THREE.Mesh(unitBoxGeo, fishWingMat); w3.scale.set(2, 0.8, 5); w3.position.set(-3, 0, 12); wingGroup.add(w3);

            const lWing = wingGroup; lWing.position.set(0, 2, 2.5); lWing.rotation.set(0, -0.2, -0.1); fish.add(lWing);
            const rWing = wingGroup.clone(); rWing.scale.z = -1; rWing.position.set(0, 2, -2.5); rWing.rotation.set(0, 0.2, 0.1); fish.add(rWing);

            fish.scale.set(scale, scale, scale); fishGroup.add(fish);

            // 动画
            gsap.to(fish.position, { y: y + 30, duration: 2 + Math.random(), yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(fish.rotation, { z: Math.random() * 0.2 - 0.1, y: Math.random() * 0.4 - 0.2, duration: 1.5 + Math.random(), yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(lWing.rotation, { z: "+=0.3", duration: 0.2, yoyo: true, repeat: -1 });
            gsap.to(rWing.rotation, { z: "-=0.3", duration: 0.2, yoyo: true, repeat: -1 });
        }

        createDetailedFish(-220, 380, 150, 3.5, 0xFF69B4); // 粉色
        createDetailedFish(220, 420, -50, 3.0, 0xD2B48C); // 浅棕

        // --- 7. 字体框 (渐变蓝 - 立即生成) ---
        const textPivot = new THREE.Group();
        scene.add(textPivot);
        const textGroup = new THREE.Group();
        textGroup.position.y = 25;
        textPivot.add(textGroup);

        const colorBottom = new THREE.Color(0x000d1a);
        const colorTop = new THREE.Color(0x0047b3);
        const voxelGeo = new THREE.BoxGeometry(15, 15, 15);

        function addFrameVoxel(x, y, z) {
            let alpha = (y + 4) / 8;
            alpha = Math.max(0, Math.min(1, alpha));
            const color = new THREE.Color().lerpColors(colorBottom, colorTop, alpha); // 修复：用 lerpColors
            const mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.2, metalness: 0.1 });
            const v = new THREE.Mesh(voxelGeo, mat);
            v.position.set(x * 15, y * 15, z * 15);
            v.castShadow = true; v.receiveShadow = true;
            textGroup.add(v);
        }
        const w = 32, h = 8;
        for (let x = -w / 2; x <= w / 2; x++) { addFrameVoxel(x, -h / 2, 0); addFrameVoxel(x, h / 2, 0); }
        for (let y = -h / 2; y <= h / 2; y++) { addFrameVoxel(-w / 2, y, 0); addFrameVoxel(w / 2, y, 0); }

        // --- 8. 中文字体渲染 (Canvas 贴图方案) ---
        function createChineseText() {
            const canvas = document.createElement('canvas');
            canvas.width = 2048; canvas.height = 512; // 调整比例适配框架 (4:1)
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, 2048, 512);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // 主标题：小鱼飞飞（适配框架宽度）
            ctx.fillStyle = '#FFCC00';
            ctx.font = 'bold 220px "Microsoft YaHei", "SimHei", sans-serif';
            ctx.fillText('小鱼飞飞', 1024, 180);

            // 副标题（放在下方）
            ctx.fillStyle = '#FFAA00';
            ctx.font = 'bold 60px "Microsoft YaHei", sans-serif';
            ctx.fillText('您的专属健身与饮食助手', 1024, 360);

            const texture = new THREE.CanvasTexture(canvas);
            const mat = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                side: THREE.FrontSide // 只显示正面
            });

            // 适配框架尺寸：框是 480×120，文字留边距设为 440×110
            const geo = new THREE.PlaneGeometry(440, 110);
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(0, 0, 1); // 略微向前，避免与框架 Z-fighting
            textGroup.add(mesh);

            // 移除了 backMesh，不再双面显示

            setLoading(false);
        }

        // 直接创建中文文字，不加载3D字体
        createChineseText();

        // --- 9. 水花粒子 ---
        const particleCount = 150;
        const particleGroup = new THREE.Group();
        scene.add(particleGroup);
        const pGeo = new THREE.BoxGeometry(3, 8, 3);
        const pMat = new THREE.MeshBasicMaterial({ color: 0xe0f7ff, transparent: true, opacity: 0.9 });
        let particles = [];
        for (let i = 0; i < particleCount; i++) {
            let p = new THREE.Mesh(pGeo, pMat); p.visible = false; particleGroup.add(p);
            particles.push({ mesh: p, velocity: new THREE.Vector3() });
        }

        function triggerSplash(position) {
            particles.forEach(p => {
                p.mesh.position.copy(position); p.mesh.position.y -= 50; p.mesh.visible = true; p.mesh.scale.set(1, 1, 1); p.mesh.material.opacity = 0.9;
                p.velocity.set((Math.random() - 0.5) * 100, Math.random() * 250 + 100, (Math.random() - 0.5) * 100);
                gsap.to(p.mesh.position, { duration: 1 + Math.random(), x: position.x + p.velocity.x * 2, y: position.y + p.velocity.y, z: position.z + p.velocity.z * 2, ease: "power2.out" });
                gsap.to(p.mesh.position, { delay: 0.5, duration: 1, y: -300, ease: "power2.in" });
                gsap.to(p.mesh.scale, { duration: 1.5, z: 0.1, y: 2, x: 0.1 });
                gsap.to(p.mesh.material, { duration: 1.8, opacity: 0 });
            });
        }

        // --- 10. 交互逻辑 (与 React 状态结合) ---
        let animationState = 0;
        const targetCamPos = new THREE.Vector3();
        let impactTime = 0; let hasImpacted = false;

        const handleClick = () => {
            if (animationState === 0) {
                animationState = 1;
                setInstruction('');
                // 1秒后显示第二段提示
                setTimeout(() => setSubInstruction('再次点击：坠落冲击 (CLICK AGAIN: DIVE)'), 1000);

                gsap.to(scene.fog, { density: 0.0005, duration: 2.5, ease: "power2.inOut" });
                gsap.to(scene.background, { r: 0.6, g: 0.85, b: 1.0, duration: 2.5, ease: "power2.inOut" });
                gsap.to(textPivot.position, { duration: 2, y: 200, ease: "power2.inOut" });
                gsap.to(camera.position, { duration: 2.5, x: 0, y: 280, z: 600, ease: "power2.inOut" });

            } else if (animationState === 1) {
                animationState = 2;
                setSubInstruction('');

                const tl = gsap.timeline();
                tl.to(textPivot.position, { duration: 2.5, y: -150, z: 100, ease: "power2.in" }, "dive");
                tl.to(textPivot.rotation, { duration: 2.5, x: -Math.PI * 4.5, ease: "power2.in" }, "dive");
                tl.call(() => {
                    hasImpacted = true;
                    impactTime = clock.getElapsedTime();
                    triggerSplash(textPivot.position);
                    gsap.fromTo(camera.position, { y: camera.position.y - 10 }, { y: camera.position.y, duration: 0.2, ease: "elastic.out(1, 0.3)" });

                    // =========================
                    // 核心修改：在这里调用 onComplete
                    // =========================
                    if (onComplete) {
                        // 稍微延迟一点，等水花溅起来再切换
                        setTimeout(() => {
                            // 可以在这里做一个 Canvas 的淡出动画，或者直接切换
                            onComplete();
                        }, 2000);
                    }
                });
                tl.to(textPivot.position, { y: -400, duration: 2, ease: "power2.out" });
                tl.to(textPivot.scale, { x: 0, y: 0, z: 0, duration: 1.5, delay: -1.5 });
            }
        };

        // 绑定点击事件到 Canvas 容器
        if (mountRef.current) {
            mountRef.current.addEventListener('click', handleClick);
        }

        // --- 11. 渲染循环 ---
        let mouseX = 0, mouseY = 0;
        const handleMouseMove = (e) => {
            if (animationState === 0) {
                mouseX = (e.clientX - width / 2) * 0.1;
                mouseY = (e.clientY - height / 2) * 0.1;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        const clock = new THREE.Clock();

        const animate = () => {
            const time = clock.getElapsedTime();

            for (let i = 0; i < instanceCount; i++) {
                const pos = positions[i];
                let waveY = Math.sin(pos.x * 0.05 + time * 0.6) * 15 + Math.cos(pos.z * 0.05 + time * 0.4) * 15;
                let scaleY = 1 + waveY * 0.002;
                if (hasImpacted) {
                    const timeSinceImpact = time - impactTime;
                    const rippleDist = timeSinceImpact * 400;
                    const dist = Math.abs(pos.distToCenter - rippleDist);
                    if (dist < 150) {
                        const intensity = Math.pow(1 - (dist / 150), 2) * Math.max(0, 1 - timeSinceImpact * 0.4);
                        waveY += 120 * intensity; scaleY += 1.5 * intensity;
                    }
                }
                dummy.position.set(pos.x, -250 + waveY, pos.z); dummy.scale.set(1, scaleY, 1);
                dummy.updateMatrix(); oceanMesh.setMatrixAt(i, dummy.matrix);
            }
            oceanMesh.instanceMatrix.needsUpdate = true;

            if (animationState === 0) {
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (450 + mouseY * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(0, 0, 0);
                textPivot.rotation.set(Math.cos(time * 0.3) * 0.05, Math.sin(time * 0.5) * 0.08, 0);
                cloudGroup.rotation.y = time * 0.02; fishGroup.rotation.y = -time * 0.03;
            } else if (animationState === 1) {
                camera.position.y += Math.sin(time) * 0.2; camera.lookAt(textPivot.position);
                textPivot.rotation.y = Math.sin(time * 0.8) * 0.1;
                cloudGroup.rotation.y = time * 0.02; fishGroup.rotation.y = -time * 0.03;
            } else if (animationState === 2) {
                targetCamPos.copy(textPivot.position).add(new THREE.Vector3(0, 200, 400));
                camera.position.lerp(targetCamPos, 0.04); camera.lookAt(textPivot.position);
            }

            renderer.render(scene, camera);
            reqIdRef.current = requestAnimationFrame(animate);
        };

        reqIdRef.current = requestAnimationFrame(animate);

        // --- 12. 窗口自适应 ---
        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        // --- 13. 清理函数 (Cleanup) ---
        return () => {
            if (reqIdRef.current) {
                cancelAnimationFrame(reqIdRef.current);
            }
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeEventListener('click', handleClick);
                if (mountRef.current.contains(renderer.domElement)) {
                    mountRef.current.removeChild(renderer.domElement);
                }
            }
            // 清理 Three.js 内存
            renderer.dispose();
            scene.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) object.material.forEach(m => m.dispose());
                    else object.material.dispose();
                }
            });
        };
    }, [onComplete]);

    // --- 样式对象 ---
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    };

    const textStyle = {
        fontFamily: "'Impact', sans-serif",
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#01579b',
        textShadow: '0 1px 5px rgba(255,255,255,0.8)',
        fontSize: '1.2rem',
        marginTop: '30px',
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

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', cursor: 'pointer' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

            {/* Loading 界面 */}
            <div style={loadingStyle}>
                正在构建世界...
            </div>

            {/* UI 提示文字 */}
            <div style={{ ...textStyle, opacity: instruction ? 1 : 0 }}>
                {instruction}
            </div>
            <div style={{ ...subTextStyle, opacity: subInstruction ? 1 : 0 }}>
                {subInstruction}
            </div>
        </div>
    );
}