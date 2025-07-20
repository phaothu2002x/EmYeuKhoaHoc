import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';

const TextWarp = () => {
    const textwrapRef = useRef();

    useGSAP(
        () => {
            const rotateText = gsap.utils.wrap(['-100', '100']);
            const moveYstart = gsap.utils.wrap(['-100', '100']);
            const moveY = gsap.utils.wrap([30, -30]);
            const textColor = gsap.utils.wrapYoyo([
                'red',
                'green',
                'aqua',
                'orange',
            ]);

            gsap.set('.wrapper', { autoAlpha: 1 });
            const splitText = SplitText.create('.splitText', {
                type: 'chars, words',
            });
            const tl = gsap.timeline({ yoyo: true, repeat: -1 });
            tl.from(splitText.chars, {
                opacity: 0,
                y: moveYstart,
                rotate: rotateText,
                stagger: {
                    each: 0.03,
                },
            })
                .to(
                    splitText.chars,
                    {
                        color: textColor,
                    },
                    0
                )
                .to(splitText.words, { y: moveY });
        },
        { scope: textwrapRef }
    );
    return (
        <main
            ref={textwrapRef}
            id="textwrap"
            className="boxContent bg-gray-600 flex-center "
        >
            <div className="wrapper">
                <h1 className="splitText text-5xl text-black font-bold">
                    This is support for the text wrap utils.
                </h1>
            </div>
        </main>
    );
};

export default TextWarp;
