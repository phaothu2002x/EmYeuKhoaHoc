import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const HoverText = () => {
    const timelineRef = useRef();
    const containerRef = useRef();
    const handleHover = () => {
        if (!timelineRef.current.isActive()) {
            timelineRef.current.play();
        }
    };
    const handleHoverLeave = () => {
        if (!timelineRef.current.isActive()) {
            timelineRef.current.reverse();
        }
    };
    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: { duration: 0.2, ease: 'power1.inOut' },
                paused: true,
            });

            timeline
                .to('.text', { color: 'white', x: 10 })
                .to('.dot', { backgroundColor: '#D67F1B', scale: 1.8 }, '<');

            timelineRef.current = timeline;
        },
        { scope: containerRef }
    );
    return (
        <div id="hoverText" className="boxContent bgGreen">
            <div
                className="item"
                ref={containerRef}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}
            >
                <div className="dot"></div>
                <div className="text">home</div>
            </div>
        </div>
    );
};

export default HoverText;
