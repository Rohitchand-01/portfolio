import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App bg-offwhite">
            <HeroBanner />
            <AboutMe />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
