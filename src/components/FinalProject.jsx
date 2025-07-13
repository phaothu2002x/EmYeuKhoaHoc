import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GSDevTools } from 'gsap/GSDevTools';
gsap.registerPlugin(GSDevTools);
import React from 'react';

const FinalProject = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: { opacity: 0, ease: 'back' },
        });

        tl.from('.background', { scale: 0, duration: 1 })
            .from('.left-content h1', {
                x: 80,
            })
            .from('.left-content h2', { x: -80 })
            .from('.left-content p', { y: 30 })
            .from('.left-content .myButton', { y: 30 })
            .from('.right-content img', {
                scale: 0,
                transformOrigin: '100% 50%',
                stagger: 0.3,
            });
        // GSDevTools.create({ animation: tl });

        //typing text

        gsap.to('.typingText', {
            duration: 3,
            yoyo: true,
            repeat: -1,
            text: {
                value: 'This is the new text with the typing style',
                ease: 'power2.inOut',
                newClass: 'text-blue-700',
            },
        });
    });

    return (
        <div
            id="finalProject"
            className="boxContent flex items-center flex-col"
        >
            <div className="background">
                <div className="left-content">
                    <h1 className="font-extrabold text-7xl">Creative</h1>
                    <h2 className="font-medium  text-5xl">Progress</h2>
                    <p className="text-2xl w-[30vw]">
                        Learn how to find Inspiration in things you love!
                    </p>
                    <button className="myButton">Read more</button>
                </div>
                <div className="right-content">
                    <div className="items">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1747036807814-3050eb4db1ed?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="human"
                            className="w-30"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1751834050767-bf074f27761f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-30"
                        />
                    </div>
                </div>
            </div>
            <p className="typingText text-3xl font-medium mt-12">
                I love You bAby git
            </p>
        </div>
    );
};

export default FinalProject;
