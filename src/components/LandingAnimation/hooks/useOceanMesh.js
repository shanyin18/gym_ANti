import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 海洋网格 Hook
 * 创建基于 InstancedMesh 的像素海洋，支持波浪和冲击波效果
 */
export function useOceanMesh(scene, config) {
    const oceanMeshRef = useRef(null);
    const positionsRef = useRef([]);
    const dummyRef = useRef(new THREE.Object3D());
    const impactDataRef = useRef({ hasImpacted: false, impactTime: 0 });

    useEffect(() => {
        if (!scene) return;

        const { size, spacing, boxSize, color, roughness } = config;
        const instanceCount = size * size;

        // 创建 InstancedMesh
        const oceanGeo = new THREE.BoxGeometry(boxSize.width, boxSize.height, boxSize.depth);
        const oceanMat = new THREE.MeshStandardMaterial({
            color,
            roughness,
            flatShading: true
        });
        const oceanMesh = new THREE.InstancedMesh(oceanGeo, oceanMat, instanceCount);
        oceanMesh.receiveShadow = true;
        scene.add(oceanMesh);
        oceanMeshRef.current = oceanMesh;

        // 预计算位置
        const positions = [];
        for (let x = 0; x < size; x++) {
            for (let z = 0; z < size; z++) {
                const px = (x - size / 2) * spacing;
                const pz = (z - size / 2) * spacing;
                positions.push({
                    x: px,
                    z: pz,
                    distToCenter: Math.sqrt(px ** 2 + pz ** 2)
                });
            }
        }
        positionsRef.current = positions;

        return () => {
            scene.remove(oceanMesh);
            oceanGeo.dispose();
            oceanMat.dispose();
        };
    }, [scene, config]);

    // 更新函数
    const updateOcean = (time) => {
        if (!oceanMeshRef.current) return;

        const { waveSpeed, waveAmplitude, ripple } = config;
        const positions = positionsRef.current;
        const dummy = dummyRef.current;
        const { hasImpacted, impactTime } = impactDataRef.current;

        for (let i = 0; i < positions.length; i++) {
            const pos = positions[i];

            // 基础波浪
            let waveY = Math.sin(pos.x * 0.05 + time * waveSpeed.x) * waveAmplitude
                + Math.cos(pos.z * 0.05 + time * waveSpeed.z) * waveAmplitude;
            let scaleY = 1 + waveY * 0.002;

            // 冲击波
            if (hasImpacted) {
                const timeSinceImpact = time - impactTime;
                const rippleDist = timeSinceImpact * ripple.speed;
                const dist = Math.abs(pos.distToCenter - rippleDist);

                if (dist < ripple.width) {
                    const intensity = Math.pow(1 - (dist / ripple.width), 2)
                        * Math.max(0, 1 - timeSinceImpact * ripple.decay);
                    waveY += ripple.maxIntensity * intensity;
                    scaleY += 1.5 * intensity;
                }
            }

            dummy.position.set(pos.x, -250 + waveY, pos.z);
            dummy.scale.set(1, scaleY, 1);
            dummy.updateMatrix();
            oceanMeshRef.current.setMatrixAt(i, dummy.matrix);
        }

        oceanMeshRef.current.instanceMatrix.needsUpdate = true;
    };

    // 触发冲击波
    const triggerImpact = (time) => {
        impactDataRef.current = {
            hasImpacted: true,
            impactTime: time
        };
    };

    return { updateOcean, triggerImpact };
}
