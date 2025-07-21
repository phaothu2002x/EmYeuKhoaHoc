import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger, SplitText, Flip, TextPlugin } from 'gsap/all';
import { GSDevTools } from 'gsap/GSDevTools';

import ScrollTriggerPage from './pages/ScrollTriggerPage';
import HomePage from './pages/HomePage';
import UtilsBasic from './pages/UtilsBasic';
gsap.registerPlugin(ScrollTrigger, SplitText, Flip, GSDevTools, TextPlugin);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scrolltrigger" element={<ScrollTriggerPage />} />
                <Route path="/utilsBasic" element={<UtilsBasic />} />
            </Routes>
        </Router>
    );
};

export default App;
