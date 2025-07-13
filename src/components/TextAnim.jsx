import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const TextAnim = () => {
    useGSAP(() => {
        const textSplit = SplitText.create('.animText', {
            type: 'words, lines, chars',
            wordsClass: 'word++',
            // propIndex: true, =>
        });

        gsap.from(textSplit.chars, {
            yPercent: 'random([-100,100])',
            rotation: 'random(-40deg, 40deg)',
            autoAlpha: 0, // set opacity and visibility
            ease: 'power2.out',
            // animation for entire text
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 1, // set the amount of stagger between elements
                from: 'random', // set the from position of the stagger
                //  ==>  animation for each element
                // repeat: -1,
                // yoyo: true,
            },
        });
    });
    return (
        <div className="mt-20 px-30 py-10 " id="splitText">
            <h3 className="animText font-bold text-4xl text-center ">
                Not really. I tend to follow the same structured routine on both
                weekdays and weekends. While that might sound strange to some
                people, it actually helps me minimize decision-making in the
                morning. More importantly, it frees up my brain to focus on
                other things, since my daily routines have become almost
                automatic.
            </h3>
        </div>
    );
};

export default TextAnim;
