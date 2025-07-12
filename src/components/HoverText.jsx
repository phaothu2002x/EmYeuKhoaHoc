import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Item = ({ text }) => {
    const containerRef = useRef();
    const timelineRef = useRef();

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: { duration: 0.2, ease: 'power1.inOut' },
                paused: true,
            });

            timeline
                .to('.text', { color: 'white', duration: 0 })
                .to('.dot', { backgroundColor: '#D67F1B', duration: 0 })
                .to('.text', { transformOrigin: 'left', scale: 1.5, x: 10 })
                .to('.dot', { scale: 1.5 }, 0);

            timelineRef.current = timeline;
        },
        { scope: containerRef }
    );
    return (
        <div
            ref={containerRef}
            onMouseEnter={() => timelineRef.current?.play()}
            onMouseLeave={() => timelineRef.current?.reverse()}
            className="item"
        >
            <div className="dot"></div>
            <div className="text">{text}</div>
        </div>
    );
};

const itemList = ['Home', 'Feature', 'Information', 'Contact'];

const HoverText = () => {
    return (
        <div id="hoverText" className="boxContent bgGreen">
            {itemList.map((item, index) => (
                <div className="my-2">
                    <Item text={item} key={index} />
                </div>
            ))}
        </div>
    );
};

export default HoverText;
