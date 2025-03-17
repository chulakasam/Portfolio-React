import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Skills from "./components/Skills.tsx";
import Service from "./components/Service.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";


function App() {
    return (
        <div>
            <Header />
            <Home />
            <About/>
            <Service />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
