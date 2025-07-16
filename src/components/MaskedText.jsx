import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react';

const MaskedText = () => {
    const directions = [
        { prop: 'y', value: -100 }, // top
        { prop: 'y', value: 100 }, // bottom
        { prop: 'x', value: -100 }, // left
        { prop: 'x', value: 100 }, // right
    ];

    useGSAP(() => {
        const splitText = SplitText.create('.maskedText', {
            type: 'chars, words,lines',
            autoSplit: true,
            mask: 'words',

            // onSplit: (self) => {
            //     gsap.from(self.words, {
            //         yPercent: 100,
            //         duration: 1,
            //         repeat: -1,
            //         autoAlpha: 0,
            //         ease: 'power2.inOut',
            //         stagger: {
            //             each: 0.05,
            //             from: 'random',
            //         },
            //     });
            // },
        });
        splitText.chars.forEach((item, i) => {
            const dir = gsap.utils.random(directions);
            gsap.from(
                item,
                {
                    [dir.prop]: dir.value,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 1,
                    autoAlpha: 0,
                    ease: 'power2.inOut',
                },
                i * 0.1
            );
        });
        // console.log('check', splitText.words);
    });
    return (
        <div className="mt-20 px-30 py-10 " id="splitText">
            <h3 className="maskedText font-bold text-4xl text-center ">
                Absolutely. Watching live matches lets me immerse myself in the
                pace and intensity of the game. The uncertainty about which team
                will win makes it even more thrilling. That’s exactly why I
                always prefer watching matches live.
            </h3>
        </div>
    );
};

export default MaskedText;
