import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const HeroSection = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo(
            '.hero-text',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.hero-text',
                    start: 'top 80%',
                },
            }
        );

        gsap.to('.hero', {
            backgroundPosition: 'center -200px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, []);

    return (
        <section
            ref={container}
            className="hero h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
            }}
        >
            <h1 className="hero-text text-5xl font-bold mb-4">
                Welcome to the Future
            </h1>
            <p className="hero-text text-xl">Scroll down to discover more</p>
        </section>
    );
};

export default HeroSection;
