import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
