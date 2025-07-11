import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const TimeLine = () => {
    const containerRef = useRef();
    const timelineRef = useRef();
    useGSAP(
        () => {
            const timeline = gsap.timeline({ paused: true });

            timeline
                // .set('#fred img', { opacity: 0 })
                .from(containerRef.current, { opacity: 0, duration: 1 })
                .from('#title', {
                    opacity: 0,
                    scale: 0,
                    duration: 3,
                    ease: 'back.out',
                })
                .from(
                    '#fred img',
                    {
                        y: 200,
                        scale: 0,
                        ease: 'power2.inOut',
                        duration: 2,
                        rotate: 360,
                        stagger: 0.2,
                    },
                    '-=1'
                )
                // .add('timeTest') => if u want to run animation at this point only
                .from('#time', { xPercent: 100, duration: 1, opacity: 0 }, '<');
            //saved timeline to ref for later use
            timelineRef.current = timeline;
        },
        { scope: containerRef }
    );

    return (
        <>
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
            <div className="buttonList">
                <button
                    onClick={() => {
                        return timelineRef.current?.play();
                    }}
                >
                    Play
                </button>
                <button
                    onClick={() => {
                        return timelineRef.current?.pause();
                    }}
                >
                    Pause
                </button>
                <button
                    onClick={() => {
                        return timelineRef.current?.reverse();
                    }}
                >
                    Revert
                </button>
                <button
                    onClick={() => {
                        return timelineRef.current?.restart();
                    }}
                >
                    Reset
                </button>
                <button
                    onClick={() => {
                        return timelineRef.current?.play('timeTest');
                    }}
                >
                    Move to time
                </button>
            </div>
        </>
    );
};

export default TimeLine;
