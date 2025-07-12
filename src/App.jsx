import gsap from 'gsap';
import { ScrollTrigger, SplitText, Flip } from 'gsap/all';
import Welcome from './components/Welcome';
import HeroSection from './components/HeroSection';
import TextAnim from './components/TextAnim';
import MaskImaged from './components/MaskImaged';
import MaskedText from './components/MaskedText';
import FlipTechnique from './components/FlipTechnique';
import TimeLine from './components/TimeLine';
import HoverText from './components/HoverText';
import FinalProject from './components/FinalProject';
import { GSDevTools } from 'gsap/GSDevTools';
gsap.registerPlugin(ScrollTrigger, SplitText, Flip, GSDevTools);
const App = () => {
    return (
        <main>
            <Welcome />
            <HeroSection />
            <TextAnim />
            <MaskImaged />
            <MaskedText />
            <FlipTechnique />
            <TimeLine />
            <HoverText />
            <FinalProject />
            <div className=" my-10 min-h-dvh bg-amber-200" />
        </main>
    );
};

export default App;
