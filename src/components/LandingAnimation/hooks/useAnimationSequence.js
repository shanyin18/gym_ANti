import { useRef, useCallback } from 'react';
import gsap from 'gsap';

/**
 * 动画序列 Hook
 * 管理动画状态机和交互逻辑
 */
export function useAnimationSequence(
    camera,
    scene,
    textPivotRef,
    triggerImpact,
    triggerSplash,
    config,
    onComplete
) {
    const animationStateRef = useRef(0);
    const clockRef = useRef(null);

    const setInstruction = useRef(null);
    const setSubInstruction = useRef(null);

    // 绑定状态更新函数
    const bindStateUpdaters = useCallback((setInstr, setSubInstr) => {
        setInstruction.current = setInstr;
        setSubInstruction.current = setSubInstr;
    }, []);

    // 点击处理
    const handleClick = useCallback(() => {
        const state = animationStateRef.current;

        if (state === 0) {
            // 第一次点击：拉近视角
            animationStateRef.current = 1;
            if (setInstruction.current) setInstruction.current('');

            setTimeout(() => {
                if (setSubInstruction.current) {
                    setSubInstruction.current('再次点击：坠落冲击 (CLICK AGAIN: DIVE)');
                }
            }, config.zoom.instructionDelay);

            gsap.to(scene.fog, {
                density: config.zoom.fog.density,
                duration: config.zoom.duration,
                ease: config.zoom.ease
            });

            gsap.to(scene.background, {
                r: config.zoom.background.r,
                g: config.zoom.background.g,
                b: config.zoom.background.b,
                duration: config.zoom.duration,
                ease: config.zoom.ease
            });

            gsap.to(textPivotRef.current.position, {
                duration: 2,
                y: config.zoom.textPivot.y,
                ease: config.zoom.ease
            });

            gsap.to(camera.position, {
                duration: config.zoom.duration,
                x: config.zoom.camera.x,
                y: config.zoom.camera.y,
                z: config.zoom.camera.z,
                ease: config.zoom.ease
            });

        } else if (state === 1) {
            // 第二次点击：坠落
            animationStateRef.current = 2;
            if (setSubInstruction.current) setSubInstruction.current('');

            const { dive } = config;
            const tl = gsap.timeline();

            // 坠落和旋转动画
            tl.to(textPivotRef.current.position, {
                duration: dive.diveDown.duration,
                y: dive.diveDown.textPivot.y,
                z: dive.diveDown.textPivot.z,
                ease: dive.diveDown.ease
            }, 'dive');

            tl.to(textPivotRef.current.rotation, {
                duration: dive.diveDown.duration,
                x: dive.diveDown.rotation.x,
                ease: dive.diveDown.ease
            }, 'dive');

            // 落地后触发水花和冲击波
            tl.call(() => {
                const time = clockRef.current.getElapsedTime();
                triggerImpact(time);
                triggerSplash(textPivotRef.current.position);

                // 相机震动
                gsap.fromTo(camera.position,
                    { y: camera.position.y + dive.cameraShake.offset },
                    {
                        y: camera.position.y,
                        duration: dive.cameraShake.duration,
                        ease: dive.cameraShake.ease
                    }
                );
            });

            // 继续下沉
            tl.to(textPivotRef.current.position, {
                y: dive.sink.y,
                duration: dive.sink.duration,
                ease: dive.sink.ease
            });

            // 缩小消失
            tl.to(textPivotRef.current.scale, {
                x: dive.shrink.scale.x,
                y: dive.shrink.scale.y,
                z: dive.shrink.scale.z,
                duration: dive.shrink.duration,
                delay: dive.shrink.delay
            });

            // 最后调用 onComplete
            tl.call(() => {
                if (onComplete) {
                    setTimeout(() => {
                        onComplete();
                    }, dive.completeDelay);
                }
            });
        }
    }, [camera, scene, textPivotRef, triggerImpact, triggerSplash, config, onComplete]);

    return {
        animationStateRef,
        clockRef,
        handleClick,
        bindStateUpdaters
    };
}
