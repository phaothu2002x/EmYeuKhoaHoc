import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useRef } from 'react';

const MaskedImage = ({ src, alt }) => {
    const imageRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            {
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', // fully hidden
            },
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // fully revealed
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top center',
                    end: 'bottom 80%',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <>
            <div className="overflow-hidden w-full max-w-3xl mx-auto my-20">
                <img
                    ref={imageRef}
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover"
                    style={{
                        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', //fully hidden
                    }}
                />
            </div>
        </>
    );
};

const MaskImaged = () => {
    return (
        <div className="bg-emerald-200 min-h-screen text-blue-500 py-20">
            <div className="h-[50%] flex items-center justify-center">
                <h1 className="text-4xl font-bold">Scroll Down to Reveal</h1>
            </div>
            <MaskedImage
                src="https://images.unsplash.com/photo-1628528927580-6a49765ff0da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Masked Reveal"
            />
        </div>
    );
};

export default MaskImaged;
