import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import IntroVideo from "./components/IntroVideo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import BugPortfolio from "./components/BugPortfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyHire from "./components/WhyHire";
import Services from "./components/Services";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyHire />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <BugPortfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;