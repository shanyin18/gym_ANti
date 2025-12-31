import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 文字框 Hook
 * 创建渐变色框架和 Canvas 文字贴图
 */
export function useTextFrame(scene, config) {
    const textPivotRef = useRef(null);

    useEffect(() => {
        if (!scene) return;

        const textPivot = new THREE.Group();
        scene.add(textPivot);
        textPivotRef.current = textPivot;

        const textGroup = new THREE.Group();
        textGroup.position.y = config.initialPosition.y;
        textPivot.add(textGroup);

        // 创建渐变框架
        const { frame } = config;
        const colorBottom = new THREE.Color(frame.colorBottom);
        const colorTop = new THREE.Color(frame.colorTop);
        const voxelGeo = new THREE.BoxGeometry(frame.voxelSize, frame.voxelSize, frame.voxelSize);

        function addFrameVoxel(x, y, z) {
            let alpha = (y + frame.height / 2) / frame.height;
            alpha = Math.max(0, Math.min(1, alpha));
            const color = new THREE.Color().lerpColors(colorBottom, colorTop, alpha);
            const mat = new THREE.MeshStandardMaterial({
                color,
                roughness: 0.2,
                metalness: 0.1
            });
            const v = new THREE.Mesh(voxelGeo, mat);
            v.position.set(x * frame.voxelSize, y * frame.voxelSize, z * frame.voxelSize);
            v.castShadow = true;
            v.receiveShadow = true;
            textGroup.add(v);
        }

        const w = frame.width;
        const h = frame.height;

        // 横边
        for (let x = -w / 2; x <= w / 2; x++) {
            addFrameVoxel(x, -h / 2, 0);
            addFrameVoxel(x, h / 2, 0);
        }
        // 竖边
        for (let y = -h / 2; y <= h / 2; y++) {
            addFrameVoxel(-w / 2, y, 0);
            addFrameVoxel(w / 2, y, 0);
        }

        // 创建 Canvas 文字
        function createChineseText() {
            const { content, plane } = config;
            const canvas = document.createElement('canvas');
            canvas.width = content.canvasWidth;
            canvas.height = content.canvasHeight;
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, content.canvasWidth, content.canvasHeight);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // 主标题
            ctx.fillStyle = content.titleColor;
            ctx.font = `bold ${content.titleFontSize}px "Microsoft YaHei", "SimHei", sans-serif`;
            ctx.fillText(content.title, content.canvasWidth / 2, 180);

            // 副标题
            ctx.fillStyle = content.subtitleColor;
            ctx.font = `bold ${content.subtitleFontSize}px "Microsoft YaHei", sans-serif`;
            ctx.fillText(content.subtitle, content.canvasWidth / 2, 360);

            const texture = new THREE.CanvasTexture(canvas);
            const mat = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                side: THREE.FrontSide
            });

            const geo = new THREE.PlaneGeometry(plane.width, plane.height);
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(0, 0, plane.zOffset);
            textGroup.add(mesh);
        }

        createChineseText();

        return () => {
            scene.remove(textPivot);
            voxelGeo.dispose();
        };
    }, [scene, config]);

    return textPivotRef;
}
