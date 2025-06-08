import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className=" h-screen flex flex-col justify-center items-center bg-zinc-950 text-white px-4 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Welcome to <span className="text-orange-500">ProctorView</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8">
        AI-powered secure online examination system for modern institutions.
      </p>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
        Get Started
      </button>
    </section>
  );
}

export default HeroSection;
