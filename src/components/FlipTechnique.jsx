import gsap from 'gsap';
import { Flip } from 'gsap/all';
import React, { useRef, useState } from 'react';

const FlipTechnique = () => {
    const flipBoxRef = useRef(null);
    const [moved, setMoved] = useState(false);
    const handleClick = () => {
        const box = flipBoxRef.current;
        const state = Flip.getState(box);

        if (moved) {
            document.querySelector('.parentContainer').appendChild(box);
            // Apply scale transform before animation
            gsap.set(box, { scale: 1 });
        } else {
            document.querySelector('.newContainer').appendChild(box);
            // Reset scale when moving back
            gsap.set(box, { scale: 2 });
        }

        Flip.from(state, {
            duration: 2.5,
            ease: 'power1.inOut',
            rotate: 360,
            scale: true,
            absolute: true,
        });

        setMoved(!moved);
    };
    return (
        <div
            className="parentContainer w-full h-[50vh] bg-teal-400 relative"
            id="flipBox"
        >
            <div ref={flipBoxRef} className={`flipBox w-[50px] h-[50px]`}>
                <p>Hi</p>
            </div>
            <div className="newContainer "></div>

            <button
                onClick={handleClick}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-500 w-fit p-5 rounded-2xl cursor-pointer"
            >
                <p className="font-bold text-2xl">Click to change</p>
            </button>
        </div>
    );
};

export default FlipTechnique;
