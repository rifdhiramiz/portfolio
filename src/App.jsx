import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <Home />
                <About />
                <Work/>
                <Skills />
                <Projects />
                <Qualifications />
                <Services />
                <Contact />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
