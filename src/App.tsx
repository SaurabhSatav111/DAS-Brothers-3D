import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import About from "./components/sections/About";
import ServicesDetail from "./components/sections/ServicesDetail";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import Careers from "./components/sections/Careers";
import CtaBanner from "./components/sections/CtaBanner";
import Footer from "./components/sections/Footer";
import OpeningSequence from "./components/ui/OpeningSequence";
import CursorTrail from "./components/ui/CursorTrail";

function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    if (showOpening) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showOpening]);

  return (
    <>
      {showOpening && (
        <OpeningSequence onComplete={() => setShowOpening(false)} />
      )}
      {!showOpening && (
        <div className="relative min-h-screen text-text-light selection:bg-electric-amber selection:text-deep-grid-navy overflow-x-hidden">
          <CursorTrail />
          <Navbar />
          <Hero />
          <TrustBar />
          <About />
          <Services hoveredService={hoveredService} onHoverService={setHoveredService} />
          <ServicesDetail />
          <Stats />
          <Projects />
          <Testimonials />
          <Careers />
          <CtaBanner />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
