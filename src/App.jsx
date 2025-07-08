import React from 'react';
import Welcome from './components/Welcome';
import HeroSection from './components/HeroSection';
import gsap from 'gsap';
import TextAnim from './components/TextAnim';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Welcome />
            <HeroSection />
            <TextAnim />
            <div className=" my-10 min-h-dvh bg-amber-200" />
        </main>
    );
};

export default App;
