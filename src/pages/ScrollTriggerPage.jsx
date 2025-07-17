import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const ScrollTriggerPage = () => {
    const containerRef = useRef();
    const navRef = useRef();
    const sectionRef = useRef([]);
    const sectionColors = ['dodgerblue', 'salmon', 'green', 'purple', 'maroon'];
    const navColors = ['#00BFFF', '#FFA07A', '#90EE90', '#EE82EE', '#FF6347'];

    useGSAP(
        () => {
            // gsap.set('.fullscreen', {
            //     backgroundColor: gsap.utils.wrap(sectionColors),
            // });
            //
            sectionRef.current.forEach((section, i) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 100px',
                    end: 'bottom 100px',
                    markers: true,
                    animation: gsap.to(navRef.current, {
                        backgroundColor: navColors[i],
                        immediateRender: false,
                    }),
                    toggleActions: 'restart none none reverse',
                });
            });
        },
        { scope: containerRef }
    );

    return (
        <main ref={containerRef} id="scrollNavChangeColor" className="relative">
            <div className="nav" ref={navRef}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Shop</a>
                <a href="#">Contact Us</a>
            </div>

            {sectionColors.map((item, i) => {
                return (
                    <div
                        key={i}
                        ref={(el) => (sectionRef.current[i] = el)}
                        className={`fullscreen [background-color:${item}]`}
                    >
                        {item}
                    </div>
                );
            })}
        </main>
    );
};

export default ScrollTriggerPage;
