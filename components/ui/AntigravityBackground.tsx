'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    originalX: number;
    originalY: number;
}

const COLORS = [
    '#4FAF8C', // Brand Accent
    '#9CA38A', // Olive
    '#7D8C9E', // Slate
    '#FF5E3A', // Orange
    '#E6A5A5', // Pink
    '#1C1917', // Dark
];

export const AntigravityBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Configuration
        const PARTICLE_COUNT = 300; // Adjustable
        const CONNECTION_DISTANCE = 100;
        const MOUSE_RADIUS = 250;
        const RETURN_SPEED = 0.05;

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push({
                    x,
                    y,
                    originalX: x,
                    originalY: y,
                    vx: (Math.random() - 0.5) * 0.5, // Slow drift
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleResize = () => {
            init();
        };


        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Physics logic provided by Antigravity physics engine mock
                // 1. Calculate distance from mouse
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // 2. Interaction
                if (distance < MOUSE_RADIUS) {
                    // Repulsion force
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;

                    // Push away
                    const repulsionStrength = 8;
                    p.vx -= forceDirectionX * force * repulsionStrength * 0.1;
                    p.vy -= forceDirectionY * force * repulsionStrength * 0.1;
                }

                // 3. Return-to-origin force (spring)
                const homeDx = p.originalX - p.x;
                const homeDy = p.originalY - p.y;
                p.vx += homeDx * RETURN_SPEED * 0.05;
                p.vy += homeDy * RETURN_SPEED * 0.05;

                // 4. Damping (friction)
                p.vx *= 0.92;
                p.vy *= 0.92;

                // 5. Update Position
                p.x += p.vx;
                p.y += p.vy;

                // 6. Draw Particle (Dash/Dot shape)
                ctx.beginPath();

                // Dynamic orientation based on velocity
                const velocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const angle = Math.atan2(p.vy, p.vx);

                // Stretch effect
                const length = p.size + velocity * 3;

                // Draw line oriented by velocity
                ctx.translate(p.x, p.y);
                ctx.rotate(angle);

                ctx.fillStyle = p.color;
                // Rect for a "confetti" look, or roundRect if supported
                ctx.fillRect(-length / 2, -p.size / 2, length, p.size);

                ctx.rotate(-angle);
                ctx.translate(-p.x, -p.y);
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        init();
        draw();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
        />
    );
};
