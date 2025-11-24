import React, { useEffect, useRef } from 'react';

const InteractiveGrid = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let dots = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        const initDots = () => {
            dots = [];
            const spacing = 40;
            const rows = Math.ceil(canvas.height / spacing);
            const cols = Math.ceil(canvas.width / spacing);

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    dots.push({
                        x: j * spacing,
                        y: i * spacing,
                        originX: j * spacing,
                        originY: i * spacing,
                        vx: 0,
                        vy: 0,
                        size: 1.5
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                // Calculate distance to mouse
                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Repulsion force
                const maxDist = 150;
                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    const angle = Math.atan2(dy, dx);
                    const repulsion = force * 8; // Strength

                    dot.vx -= Math.cos(angle) * repulsion;
                    dot.vy -= Math.sin(angle) * repulsion;
                }

                // Return to origin force (spring)
                const spring = 0.05;
                const friction = 0.9;

                dot.vx += (dot.originX - dot.x) * spring;
                dot.vy += (dot.originY - dot.y) * spring;

                dot.vx *= friction;
                dot.vy *= friction;

                dot.x += dot.vx;
                dot.y += dot.vy;

                // Draw dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);

                // Dynamic color based on velocity
                const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy);
                const alpha = 0.2 + Math.min(speed * 0.1, 0.6);
                ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`; // Cyan
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default InteractiveGrid;
