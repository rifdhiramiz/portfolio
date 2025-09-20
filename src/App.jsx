import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Work from "./components/Work";
import "./index.css";

export default function App() {
  // Create refs for all sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const qualificationsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Generic scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Pass scroll function and refs to Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          workRef,
          skillsRef,
          projectsRef,
          qualificationsRef,
          servicesRef,
          contactRef,
        }}
      />

      <div className="flex-grow">
        <div ref={homeRef}>
          <Home scrollToProjects={() => scrollToSection(projectsRef)} />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={workRef}>
          <Work />
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={qualificationsRef}>
          <Qualifications />
        </div>

        <div ref={servicesRef}>
          <Services />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}