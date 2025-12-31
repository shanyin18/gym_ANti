import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * 云朵系统 Hook
 * 创建随机分布的云朵集群，带浮动动画
 */
export function useCloudSystem(scene, config) {
    const cloudGroupRef = useRef(null);

    useEffect(() => {
        if (!scene) return;

        const cloudGroup = new THREE.Group();
        scene.add(cloudGroup);
        cloudGroupRef.current = cloudGroup;

        const { count, chunkSize, boxSize, color, emissive, position, scale, animation } = config;
        const cloudMat = new THREE.MeshStandardMaterial({
            color,
            emissive,
            roughness: 1.0,
            flatShading: true
        });
        const cloudGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

        // 创建云朵集群
        function createCloudCluster(x, y, z) {
            const cluster = new THREE.Group();
            cluster.position.set(x, y, z);

            const chunks = Math.floor(Math.random() * (chunkSize.max - chunkSize.min)) + chunkSize.min;
            for (let i = 0; i < chunks; i++) {
                const mesh = new THREE.Mesh(cloudGeo, cloudMat);
                mesh.position.set(
                    (Math.random() - 0.5) * 18,
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 18
                );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                cluster.add(mesh);
            }

            cloudGroup.add(cluster);

            // 随机缩放
            const s = scale.base + Math.pow(Math.random(), 2) * scale.randomMax;
            cluster.scale.set(s, s, s);

            // 浮动动画
            const floatHeight = animation.floatHeight[0] + Math.random() * (animation.floatHeight[1] - animation.floatHeight[0]);
            const floatDuration = animation.floatDuration[0] + Math.random() * (animation.floatDuration[1] - animation.floatDuration[0]);
            gsap.to(cluster.position, {
                y: y + floatHeight,
                duration: floatDuration,
                delay: Math.random() * 2, // 随机延迟 0-2 秒
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });

            // 旋转动画
            const rotateDuration = animation.rotateDuration[0] + Math.random() * (animation.rotateDuration[1] - animation.rotateDuration[0]);
            gsap.to(cluster.rotation, {
                y: Math.random() * 0.5,
                duration: rotateDuration,
                delay: Math.random() * 3, // 随机延迟 0-3 秒
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });
        }

        // 生成云朵
        for (let i = 0; i < count; i++) {
            createCloudCluster(
                (Math.random() - 0.5) * position.xRange,
                position.yMin + Math.random() * (position.yMax - position.yMin),
                (Math.random() - 0.5) * position.zRange + position.zOffset
            );
        }

        return () => {
            gsap.killTweensOf(cloudGroup.children);
            scene.remove(cloudGroup);
            cloudGeo.dispose();
            cloudMat.dispose();
        };
    }, [scene, config]);

    return cloudGroupRef;
}
