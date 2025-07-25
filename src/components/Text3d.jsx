import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Text3d = () => {
    const textRef = useRef();

    useGSAP(
        () => {
            const animation = gsap.timeline({});
            const numberOfTarget = 5;
            const duration = 0.3;
            const pause = 1;
            const stagger = duration + pause;
            const repeatDelay = stagger * (numberOfTarget - 1) + pause;
            animation
                .set('.demo div', { transformOrigin: '50% 50% -50' })
                .from('.demo div', {
                    rotateX: -90,
                    // rotateY: -40,
                    opacity: 0,
                    duration: duration,
                    stagger: {
                        each: stagger,
                        repeatDelay: repeatDelay,
                        repeat: -1,
                    },
                })
                .to(
                    '.demo div',
                    {
                        rotateX: 90,
                        // rotateY: 40,
                        opacity: 0,
                        duration: duration,
                        stagger: {
                            each: stagger,
                            repeat: -1,
                            repeatDelay: repeatDelay,
                        },
                    },
                    stagger
                );
        },
        { scope: textRef }
    );
    return (
        <main ref={textRef} id="text3d" className="boxContent bg-amber-300">
            <div className="wrapper-content">
                <div className="demo  text-blue-900 font-extraboldbold">
                    <div>WONDERFULL Ryan truong</div>
                    <div>THIS IS 3D ROTATION TEXT</div>
                    <div>Never Give Up</div>
                    <div>Keep Going HiHi!</div>
                    <div>It's Gonna Be Ok😁</div>
                </div>
            </div>
        </main>
    );
};

export default Text3d;
