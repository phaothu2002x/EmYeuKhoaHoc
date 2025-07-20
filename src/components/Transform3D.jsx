import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';

const Transform3D = () => {
    const transform3dRef = useRef();

    useGSAP(
        () => {
            const colorText = gsap.utils.wrap([
                'red',
                'blue',
                'orange',
                'aqua',
                'yellow',
            ]);

            // gsap.set('.box', { transformPerspective: 400 });
            // gsap.to('.box', {
            //     rotateY: 360,
            //     duration: 8,
            //     ease: 'none',
            //     transformOrigin: '50% 50%',
            // });

            const splitText = SplitText.create('h1', { type: 'chars' });
            gsap.set('h1', { transformPerspective: 400 });

            const tl = gsap.timeline();
            tl.to(splitText.chars, {
                ease: 'back(2)',
                rotateX: 360,
                // rotateY: 90,
                // rotateZ: 180,
                transformOrigin: '50% 50%, -100',
                repeat: -1,
                yoyo: true,
                stagger: { amount: 2.7, ease: 'power1.in' },
                color: colorText,
            });
        },
        { scope: transform3dRef }
    );

    return (
        <main
            ref={transform3dRef}
            id="transform3d"
            className="boxContent border-green-200 flex-center"
        >
            <div className="wrapper flex-center gap-2.5">
                <h1 className="text-5xl font-bold text-gray-500">
                    This is text with 3d transform
                </h1>
                {/* <div className="box w-[150px] h-[150px] bg-pink-500 rounded-3xl"></div>
                <div className="box w-[150px] h-[150px] bg-pink-500 rounded-3xl"></div>
                <div className="box w-[150px] h-[150px] bg-pink-500 rounded-3xl"></div> */}
            </div>
        </main>
    );
};

export default Transform3D;
