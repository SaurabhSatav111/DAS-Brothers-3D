import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const timerRef = useRef<any>(null);

  const reviews = [
    {
      name: "Rajesh Kulkarni",
      company: "Kulkarni Engineering Works, Pune",
      text: "Das & Brothers completed our 33kV substation erection in record time. Their technical documentation, liaising support with the electricity board, and commitment to electrical safety standards were outstanding.",
      rating: 5
    },
    {
      name: "Amit Deshmukh",
      company: "Deshmukh Auto Industries, Chikhali",
      text: "When we faced a critical HT underground cable blow-out, their emergency team located the fault within hours and carried out straight joints overnight. Exceptional breakdown response time!",
      rating: 5
    },
    {
      name: "Sanjay Shah",
      company: "Shah Metal Fabricators, Bhosari",
      text: "The custom APFC panel manufactured and installed by them has significantly improved our power factor from 0.82 to 0.98, drastically reducing our monthly MSEDCL utility bills.",
      rating: 5
    },
    {
      name: "Vikram Patil",
      company: "Patil Cold Storage & logistics",
      text: "We hired Das & Brothers for complete electrical design and cabling works. Outstanding engineering precision, neat layout cabling, and professional testing parameters verification.",
      rating: 5
    }
  ];

  const maxIndex = reviews.length - visibleCards;

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Resize listener to dynamically change visible cards
  useEffect(() => {
    const handleResize = () => {
      let cards = 3;
      if (window.innerWidth < 768) {
        cards = 1;
      } else if (window.innerWidth < 1024) {
        cards = 2;
      }
      setVisibleCards(cards);
      setActiveIndex((prev) => {
        const max = reviews.length - cards;
        return prev > max ? max : prev;
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [reviews.length]);

  // Auto advance logic
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);
    
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1.25; // Speed of progress fill (about 4 seconds total)
      });
    }, 50);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, visibleCards]);

  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-10 bg-[#0a1e3c] border-t border-b border-white/10"
    >
      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-[#ef9f27]/3 blur-[140px] -z-20 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl">
          <span className="text-xs font-mono text-[#ef9f27] tracking-[0.35em] uppercase block mb-3">
            Client Testimonials & Feedback
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Trusted by Industries
          </h2>
          <p className="font-inter text-white/80 text-xs md:text-sm mt-3 leading-relaxed">
            See what our leading industrial clients say about our high-tension engineering quality and emergency restoration speeds.
          </p>
        </div>

        {/* Dynamic sliding track showing visible cards */}
        <div className="w-full overflow-hidden py-4 select-none">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
          >
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4"
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl border border-white/10 bg-[#1a2f50] hover:border-[#ef9f27]/50 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between transition-all duration-300">
                  {/* Quote decoration */}
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-[#ef9f27]/5 pointer-events-none" />

                  {/* Body quote */}
                  <p className="font-inter text-xs md:text-sm text-white/90 italic leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Footer Client details */}
                  <div className="flex flex-col mt-4">
                    <span className="font-orbitron text-sm font-bold text-white">
                      {review.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#ef9f27] mt-0.5">
                      {review.company}
                    </span>

                    {/* Star Rating list */}
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(review.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-3.5 h-3.5 fill-[#ef9f27] text-[#ef9f27]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators & Controls */}
        <div className="flex flex-col items-center gap-6 mt-8 z-10">
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#ef9f27] hover:bg-[#1a2f50] flex items-center justify-center text-white/60 hover:text-[#ef9f27] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-[#ef9f27]" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#ef9f27] hover:bg-[#1a2f50] flex items-center justify-center text-white/60 hover:text-[#ef9f27] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto advance progress line */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden border border-white/5 p-[0.5px]">
            <div 
              className="h-full bg-[#ef9f27] transition-all duration-100 ease-linear shadow-[0_0_6px_#ef9f27]"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
