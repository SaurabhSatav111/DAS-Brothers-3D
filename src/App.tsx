import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import CtaBanner from "./components/sections/CtaBanner";
import Footer from "./components/sections/Footer";

function App() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleHoverService = (index: number | null) => {
    setHoveredService(index);
  };

  return (
    <div className="relative min-h-screen text-text-light selection:bg-electric-amber selection:text-deep-grid-navy overflow-x-hidden">
      
      {/* 1. Header Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Services Section */}
      <Services hoveredService={hoveredService} onHoverService={handleHoverService} />

      {/* 5. Projects Section */}
      <Projects />

      {/* 6. Contact Section */}
      <CtaBanner />

      {/* 7. Footer Section */}
      <Footer />

    </div>
  );
}

export default App;
