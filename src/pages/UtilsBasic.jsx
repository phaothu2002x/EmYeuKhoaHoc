import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const UtilsBasic = () => {
    const containerRef = useRef(null);
    const utilsRef = useRef();
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    useGSAP(
        () => {
            const container = containerRef.current;
            if (!container) return;

            //convert to quicksetter for better performance
            const setScaleX = gsap.quickSetter('.box', 'scaleX');
            const setScaleY = gsap.quickSetter('.box', 'scaleY');

            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setMouseX(x);
                setMouseY(y);
                //
                const scaleX = gsap.utils.mapRange(0, 600, 1, 4, x);
                const scaleY = gsap.utils.mapRange(0, 600, 1, 4, y);
                setScaleX(scaleX);
                setScaleY(scaleY);
            };

            container.addEventListener('mousemove', handleMouseMove);
            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: utilsRef }
    );

    return (
        <main
            id="utilBasic"
            ref={utilsRef}
            className="boxContent flex-center flex-col gap-1"
        >
            <h1>Illustrate mouse move</h1>
            <div id="demoUtilBasic" ref={containerRef} className="relative">
                <div className="line"></div>
                <div className="box">
                    <svg viewBox="0 0 16 16">
                        <path d="M14.13 9.11h-12l6-7 6 7z" />
                        <path d="M6.12 8h4v6h-4z" />
                    </svg>
                </div>
            </div>
            <p>
                mouseX
                <span className="output" id="mouseX">
                    {mouseX}
                </span>
            </p>
            <p>
                mouseY
                <span className="output" id="mouseY">
                    {mouseY}
                </span>
            </p>
        </main>
    );
};

export default UtilsBasic;
