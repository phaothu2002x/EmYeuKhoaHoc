import React from 'react';
import Welcome from '../components/Welcome';
import HeroSection from '../components/HeroSection';
import TextAnim from '../components/TextAnim';
import MaskImaged from '../components/MaskImaged';
import MaskedText from '../components/MaskedText';
import FlipTechnique from '../components/FlipTechnique';
import TimeLine from '../components/TimeLine';
import HoverText from '../components/HoverText';
import FinalProject from '../components/FinalProject';
import TextIntro from '../components/TextIntro';
import HermanHoper from '../components/HermanHoper';

const HomePage = () => {
    return (
        <main>
            <Welcome />
            <HeroSection />
            <TextIntro />
            <TextAnim />
            <MaskImaged />
            <MaskedText />
            <FlipTechnique />
            <TimeLine />
            <HoverText />
            <FinalProject />
            <HermanHoper />
            <div className=" my-10 min-h-dvh bg-amber-200" />
        </main>
    );
};

export default HomePage;
