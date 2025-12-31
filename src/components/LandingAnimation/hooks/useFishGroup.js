import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * 飞鱼组 Hook
 * 创建详细的飞鱼模型，带翅膀拍动动画
 */
export function useFishGroup(scene, fishConfigs) {
    const fishGroupRef = useRef(null);

    useEffect(() => {
        if (!scene || !fishConfigs) return;

        const fishGroup = new THREE.Group();
        scene.add(fishGroup);
        fishGroupRef.current = fishGroup;

        // 共享几何体和材质
        const unitBoxGeo = new THREE.BoxGeometry(1, 1, 1);
        const fishWingMat = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide,
            flatShading: true
        });
        const fishEyeMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            flatShading: true
        });

        function createDetailedFish(config) {
            const { position, scale, color } = config;
            const fish = new THREE.Group();
            fish.position.set(position.x, position.y, position.z);

            const bodyMat = new THREE.MeshStandardMaterial({
                color,
                roughness: 0.4,
                flatShading: true
            });

            // 身体部分
            const body = new THREE.Mesh(unitBoxGeo, bodyMat);
            body.scale.set(14, 5, 5);
            fish.add(body);

            const tailStub = new THREE.Mesh(unitBoxGeo, bodyMat);
            tailStub.scale.set(3, 3, 3);
            tailStub.position.set(-8.5, 0, 0);
            fish.add(tailStub);

            const tailFin = new THREE.Mesh(unitBoxGeo, bodyMat);
            tailFin.scale.set(2, 8, 1);
            tailFin.position.set(-10, 1, 0);
            tailFin.rotation.z = 0.2;
            fish.add(tailFin);

            const eyes = new THREE.Mesh(unitBoxGeo, fishEyeMat);
            eyes.scale.set(1, 1.5, 5.2);
            eyes.position.set(4, 1, 0);
            fish.add(eyes);

            // 翅膀组
            const wingGroup = new THREE.Group();
            const w1 = new THREE.Mesh(unitBoxGeo, fishWingMat);
            w1.scale.set(5, 1, 6);
            w1.position.set(1, 0, 3);
            wingGroup.add(w1);

            const w2 = new THREE.Mesh(unitBoxGeo, fishWingMat);
            w2.scale.set(4, 1, 6);
            w2.position.set(-1, 0, 8);
            wingGroup.add(w2);

            const w3 = new THREE.Mesh(unitBoxGeo, fishWingMat);
            w3.scale.set(2, 0.8, 5);
            w3.position.set(-3, 0, 12);
            wingGroup.add(w3);

            // 左翅膀
            const lWing = wingGroup;
            lWing.position.set(0, 2, 2.5);
            lWing.rotation.set(0, -0.2, -0.1);
            fish.add(lWing);

            // 右翅膀
            const rWing = wingGroup.clone();
            rWing.scale.z = -1;
            rWing.position.set(0, 2, -2.5);
            rWing.rotation.set(0, 0.2, 0.1);
            fish.add(rWing);

            fish.scale.set(scale, scale, scale);
            fishGroup.add(fish);

            // 动画
            gsap.to(fish.position, {
                y: position.y + 30,
                duration: 2 + Math.random(),
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });

            gsap.to(fish.rotation, {
                z: Math.random() * 0.2 - 0.1,
                y: Math.random() * 0.4 - 0.2,
                duration: 1.5 + Math.random(),
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });

            gsap.to(lWing.rotation, {
                z: '+=0.3',
                duration: 0.2,
                yoyo: true,
                repeat: -1
            });

            gsap.to(rWing.rotation, {
                z: '-=0.3',
                duration: 0.2,
                yoyo: true,
                repeat: -1
            });
        }

        // 创建所有鱼
        fishConfigs.forEach(createDetailedFish);

        return () => {
            gsap.killTweensOf(fishGroup.children);
            scene.remove(fishGroup);
            unitBoxGeo.dispose();
            fishWingMat.dispose();
            fishEyeMat.dispose();
        };
    }, [scene, fishConfigs]);

    return fishGroupRef;
}
