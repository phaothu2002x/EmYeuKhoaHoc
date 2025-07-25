import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Text3d = () => {
    const textRef = useRef();

    useGSAP(
        () => {
            const animation = gsap.timeline({ repeat: -1 });
            const stagger = 1;
            animation
                .from('.demo div', {
                    y: 100,
                    opacity: 0,
                    ease: 'power2.in',
                    stagger: {
                        each: stagger,
                    },
                })
                .to(
                    '.demo div',
                    {
                        y: -100,
                        opacity: 0,
                        ease: 'power2.in',
                        stagger: {
                            each: stagger,
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
                <div className="demo">
                    <div>Wonderful guys</div>
                    <div>this is 3d rotation</div>
                    <div>Never give up</div>
                    <div>keep going</div>
                    <div>It's gonna be Ok😁</div>
                </div>
            </div>
        </main>
    );
};

export default Text3d;
