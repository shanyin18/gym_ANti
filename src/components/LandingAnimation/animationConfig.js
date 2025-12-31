/**
 * LandingAnimation 集中配置
 * 包含场景、实体、动画的所有可调参数
 */

export const SCENE_CONFIG = {
    fogColor: 0x87CEEB,
    fogDensity: {
        initial: 0.0015,
        zoomed: 0.0005
    },
    backgroundColor: {
        initial: { r: 0.53, g: 0.81, b: 0.92 },
        zoomed: { r: 0.6, g: 0.85, b: 1.0 }
    }
};

export const OCEAN_CONFIG = {
    size: 80,
    spacing: 35,
    boxSize: { width: 30, height: 150, depth: 30 },
    color: 0x0077be,
    roughness: 0.8,
    waveSpeed: { x: 0.6, z: 0.4 },
    waveAmplitude: 15,
    ripple: {
        speed: 400,
        width: 150,
        maxIntensity: 120,
        decay: 0.4
    }
};

export const CLOUD_CONFIG = {
    count: 40,
    chunkSize: { min: 5, max: 10 },
    boxSize: 10,
    color: 0xffffff,
    emissive: 0x222222,
    position: {
        xRange: 2000,
        yMin: 250,
        yMax: 850,
        zRange: 1500,
        zOffset: -200
    },
    scale: {
        base: 1.0,
        randomMax: 6.0
    },
    animation: {
        floatHeight: [20, 50],
        floatDuration: [6, 14],
        rotateDuration: [20, 40]
    }
};

export const FISH_CONFIG = [
    {
        position: { x: -220, y: 380, z: 150 },
        scale: 3.5,
        color: 0xFF69B4, // 粉色
        name: 'fish1'
    },
    {
        position: { x: 220, y: 420, z: -50 },
        scale: 3.0,
        color: 0xD2B48C, // 浅棕
        name: 'fish2'
    }
];

export const TEXT_CONFIG = {
    frame: {
        width: 32,
        height: 8,
        voxelSize: 15,
        colorBottom: 0x000d1a,
        colorTop: 0x0047b3
    },
    content: {
        title: '小鱼飞飞',
        subtitle: '您的专属健身与饮食助手',
        titleColor: '#FFCC00',
        subtitleColor: '#FFAA00',
        titleFontSize: 220,
        subtitleFontSize: 60,
        canvasWidth: 2048,
        canvasHeight: 512
    },
    plane: {
        width: 440,
        height: 110,
        zOffset: 1
    },
    initialPosition: {
        y: 25
    }
};

export const PARTICLE_CONFIG = {
    count: 150,
    boxSize: { width: 3, height: 8, depth: 3 },
    color: 0xe0f7ff,
    opacity: 0.9,
    velocity: {
        xRange: 100,
        yMin: 100,
        yMax: 350,
        zRange: 100
    },
    animation: {
        duration: [1, 2],
        fallDuration: 1,
        fallDelay: 0.5,
        scaleDuration: 1.5,
        opacityDuration: 1.8
    }
};

export const CAMERA_CONFIG = {
    fov: 60,
    near: 1,
    far: 6000,
    initialPosition: { x: 0, y: 450, z: 950 },
    zoomedPosition: { x: 0, y: 280, z: 600 },
    mouseInfluence: 0.5,
    lerpSpeed: 0.05
};

export const LIGHT_CONFIG = {
    ambient: {
        color: 0xffffff,
        intensity: 0.7
    },
    directional: {
        color: 0xffffff,
        intensity: 1.5,
        position: { x: 300, y: 800, z: 400 },
        shadowMapSize: 1024,
        shadowCameraSize: 2000
    }
};

// 动画序列配置
export const ANIMATION_SEQUENCES = {
    zoom: {
        duration: 2.5,
        fog: { density: 0.0005 },
        background: { r: 0.6, g: 0.85, b: 1.0 },
        textPivot: { y: 200 },
        camera: { x: 0, y: 280, z: 600 },
        ease: 'power2.inOut',
        instructionDelay: 1000
    },
    dive: {
        diveDown: {
            duration: 2.5,
            textPivot: { y: -150, z: 100 },
            rotation: { x: -Math.PI * 4.5 },
            ease: 'power2.in'
        },
        sink: {
            duration: 2,
            y: -400,
            ease: 'power2.out'
        },
        shrink: {
            duration: 1.5,
            delay: -1.5,
            scale: { x: 0, y: 0, z: 0 }
        },
        cameraShake: {
            offset: -10,
            duration: 0.2,
            ease: 'elastic.out(1, 0.3)'
        },
        completeDelay: 2000
    }
};

// 性能档位预设
export const QUALITY_PRESETS = {
    low: {
        ocean: { size: 40, spacing: 40 },
        clouds: { count: 15 },
        fish: [FISH_CONFIG[0]], // 只保留一条鱼
        particles: { count: 80 },
        shadows: false,
        antialias: false
    },
    medium: {
        ocean: { size: 60, spacing: 37 },
        clouds: { count: 25 },
        fish: FISH_CONFIG,
        particles: { count: 100 },
        shadows: true,
        antialias: true
    },
    high: {
        ocean: { size: 80, spacing: 35 },
        clouds: { count: 40 },
        fish: FISH_CONFIG,
        particles: { count: 150 },
        shadows: true,
        antialias: true
    }
};

/**
 * 根据质量档位合并配置
 */
export function getConfigByQuality(quality = 'high') {
    const preset = QUALITY_PRESETS[quality] || QUALITY_PRESETS.high;

    return {
        scene: SCENE_CONFIG,
        ocean: { ...OCEAN_CONFIG, ...preset.ocean },
        clouds: { ...CLOUD_CONFIG, ...preset.clouds },
        fish: preset.fish,
        text: TEXT_CONFIG,
        particles: { ...PARTICLE_CONFIG, ...preset.particles },
        camera: CAMERA_CONFIG,
        lights: LIGHT_CONFIG,
        animations: ANIMATION_SEQUENCES,
        renderer: {
            antialias: preset.antialias,
            shadows: preset.shadows
        }
    };
}
