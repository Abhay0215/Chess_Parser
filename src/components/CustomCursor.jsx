import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const requestRef = useRef();

    // Initialize trail state
    const [trail, setTrail] = useState(Array(12).fill({ x: 0, y: 0 }));

    // Mouse movement handler
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Smooth cursor and trail animation loop
    const animate = () => {
        // Main cursor (smooth follow)
        setCursorPos(prev => ({
            x: prev.x + (mousePos.x - prev.x) * 0.15,
            y: prev.y + (mousePos.y - prev.y) * 0.15
        }));

        // Trail logic
        setTrail(prevTrail => {
            const newTrail = [...prevTrail];
            newTrail[0] = {
                x: newTrail[0].x + (mousePos.x - newTrail[0].x) * 0.2,
                y: newTrail[0].y + (mousePos.y - newTrail[0].y) * 0.2
            };
            for (let i = 1; i < newTrail.length; i++) {
                newTrail[i] = {
                    x: newTrail[i].x + (newTrail[i - 1].x - newTrail[i].x) * 0.25,
                    y: newTrail[i].y + (newTrail[i - 1].y - newTrail[i].y) * 0.25
                };
            }
            return newTrail;
        });

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [mousePos]);

    // Hide default cursor globally when this component is mounted
    useEffect(() => {
        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            {/* Trail Effect */}
            {trail.map((pos, i) => (
                <div
                    key={i}
                    className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen"
                    style={{
                        left: pos.x,
                        top: pos.y,
                        width: `${12 + i * 2}px`,
                        height: `${12 + i * 2}px`,
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: `rgba(56, 189, 248, ${0.8 - i * 0.06})`,
                        boxShadow: `0 0 ${10 + i * 2}px rgba(56, 189, 248, ${0.5 - i * 0.04})`,
                        backdropFilter: 'blur(2px)',
                    }}
                />
            ))}

            {/* Chess Piece Cursor */}
            <div
                className="fixed pointer-events-none z-[10000] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-3xl sm:text-4xl lg:text-5xl"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: 'translate(-50%, -50%) rotate(15deg)',
                }}
            >
                ♞
            </div>
        </>
    );
};

export default CustomCursor;
