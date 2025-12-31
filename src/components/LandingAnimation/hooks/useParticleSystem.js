import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * 粒子系统 Hook
 * 创建水花溅射粒子效果
 */
export function useParticleSystem(scene, config) {
    const particleGroupRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        if (!scene) return;

        const particleGroup = new THREE.Group();
        scene.add(particleGroup);
        particleGroupRef.current = particleGroup;

        const { count, boxSize, color, opacity } = config;
        const pGeo = new THREE.BoxGeometry(boxSize.width, boxSize.height, boxSize.depth);
        const pMat = new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity
        });

        const particles = [];
        for (let i = 0; i < count; i++) {
            const p = new THREE.Mesh(pGeo, pMat);
            p.visible = false;
            particleGroup.add(p);
            particles.push({
                mesh: p,
                velocity: new THREE.Vector3()
            });
        }
        particlesRef.current = particles;

        return () => {
            gsap.killTweensOf(particles.map(p => p.mesh));
            scene.remove(particleGroup);
            pGeo.dispose();
            pMat.dispose();
        };
    }, [scene, config]);

    // 触发水花
    const triggerSplash = (position) => {
        const particles = particlesRef.current;
        const { velocity, animation, opacity } = config;

        particles.forEach(p => {
            p.mesh.position.copy(position);
            p.mesh.position.y -= 50;
            p.mesh.visible = true;
            p.mesh.scale.set(1, 1, 1);
            p.mesh.material.opacity = opacity;

            p.velocity.set(
                (Math.random() - 0.5) * velocity.xRange,
                Math.random() * (velocity.yMax - velocity.yMin) + velocity.yMin,
                (Math.random() - 0.5) * velocity.zRange
            );

            const duration = animation.duration[0] + Math.random() * (animation.duration[1] - animation.duration[0]);

            gsap.to(p.mesh.position, {
                duration,
                x: position.x + p.velocity.x * 2,
                y: position.y + p.velocity.y,
                z: position.z + p.velocity.z * 2,
                ease: 'power2.out'
            });

            gsap.to(p.mesh.position, {
                delay: animation.fallDelay,
                duration: animation.fallDuration,
                y: -300,
                ease: 'power2.in'
            });

            gsap.to(p.mesh.scale, {
                duration: animation.scaleDuration,
                z: 0.1,
                y: 2,
                x: 0.1
            });

            gsap.to(p.mesh.material, {
                duration: animation.opacityDuration,
                opacity: 0
            });
        });
    };

    return { triggerSplash };
}
