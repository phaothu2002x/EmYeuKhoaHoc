import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const TimeLine = () => {
    const containerRef = useRef();
    useGSAP(
        () => {
            const timeline = gsap.timeline();

            timeline
                // .set('#fred img', { opacity: 0 })
                .from(containerRef.current, { opacity: 0, duration: 1 })
                .from('#title', {
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    ease: 'back.out',
                })
                .from('#fred img', {
                    y: 200,
                    scale: 0,
                    ease: 'power2.inOut',
                    duration: 1.1,
                    rotate: 360,
                    stagger: 0.2,
                })
                .from('#time', { xPercent: 100, duration: 0.3, opacity: 0 });
        },
        { scope: containerRef }
    );

    return (
        <div
            id="timeline"
            className=" boxContent relative flex flex-col items-center"
            ref={containerRef}
        >
            <img
                id="title"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/meet-the-freds.png"
                alt=""
                className="w-150"
            ></img>
            <div id="fred">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-blue.svg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-pink.svg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-red.svg" />
            </div>
            <img
                id="time"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/time.png"
                className=" absolute right-20 top-0 w-50"
            ></img>
        </div>
    );
};

export default TimeLine;
