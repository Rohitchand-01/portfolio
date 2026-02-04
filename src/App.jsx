import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

function App() {
    return (
        <>
            <SEO />
            <div className="App bg-offwhite">
                <HeroBanner />
                <AboutMe />
                <Experience />
                <Skills />
                <Pricing />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
