import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Welcome from './components/Welcome';
import HeroSection from './components/HeroSection';
import TextAnim from './components/TextAnim';
import MaskImaged from './components/MaskImaged';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Welcome />
            <HeroSection />
            <TextAnim />
            <MaskImaged />
            <div className=" my-10 min-h-dvh bg-amber-200" />
        </main>
    );
};

export default App;
