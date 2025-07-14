import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const HermanHoper = () => {
    const hermanRef = useRef();
    useGSAP(
        () => {
            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.5,
                yoyo: true,
            });

            timeline
                .from('.hole', { scale: 0, repeat: 1, yoyo: true })
                .fromTo(
                    '.herman',
                    { y: 160, scaleY: 2 },
                    { y: -175, scaleY: 1 },
                    '0.2'
                )
                .to('.herman', { y: -4, ease: 'power2.in' }, '>')
                .to('.herman', {
                    scaleY: 0.8,
                    scaleX: 1.3,
                    transformOrigin: '50% 100%',
                    duration: 0.2,
                    repeat: 1,
                    yoyo: true,
                })
                .to('.shadow', { opacity: 1, duration: 0.2 }, '0.7')
                .to('.shadow', { scaleX: 0.7, ease: 'power2.in' }, '>');
        },
        { scope: hermanRef }
    );

    return (
        <div
            ref={hermanRef}
            id="hermanHoper"
            className="boxContent bg-amber-500"
        >
            <div className="demo">
                <div className="shadow"></div>
                <div className="hole"></div>

                <div className="hermanWrapper">
                    <img
                        className="herman"
                        src="https://assets.codepen.io/32887/herman.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HermanHoper;
