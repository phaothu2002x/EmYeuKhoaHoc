import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';

const TextIntro = () => {
    const containerRef = useRef();
    useGSAP(
        () => {
            const splitText = SplitText.create('.subtext', {
                type: 'words',
                mask: 'words',
            });

            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 1,
            });
            tl.from('.mainText', {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: 'back.out(2.3)',
            })
                .to(
                    '.mainText',
                    {
                        x: -80,
                        duration: 0.4,
                    },
                    '-=0.5'
                )
                .from(
                    splitText.words,
                    { x: -100, opacity: 0, duration: 0.3 },
                    '<0.2'
                );
        },
        { scope: containerRef }
    );

    return (
        <div
            id="textIntro"
            className="boxContent bg-black flex-center flex-col"
            ref={containerRef}
        >
            <div className="container flex-center ">
                <h1 className="mainText text-white text-7xl font-extrabold">
                    Ryan Truong
                    <span className="subtext text-white text-6xl font-normal ml-3">
                        Present
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default TextIntro;
