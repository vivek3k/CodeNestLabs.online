import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Intro = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"zoom" | "glow" | "fade">("zoom");

  useEffect(() => {
    // Phase 1: Zoom in (0-2s)
    const glowTimer = setTimeout(() => setPhase("glow"), 2000);
    // Phase 2: Glow effect (2-3.5s)
    const fadeTimer = setTimeout(() => setPhase("fade"), 3500);
    // Phase 3: Fade out and navigate (3.5-4.5s)
    const navTimer = setTimeout(() => navigate("/home"), 4500);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Netflix-style red glow background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          phase === "glow" || phase === "fade" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 72% 30% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Animated Logo Container */}
      <div 
        className={`relative flex flex-col items-center transition-all ease-out ${
          phase === "zoom" 
            ? "scale-[0.3] opacity-0 animate-netflix-zoom" 
            : phase === "glow"
            ? "scale-100 opacity-100"
            : "scale-110 opacity-0"
        }`}
        style={{
          animation: phase === "zoom" ? "netflix-zoom 2s ease-out forwards" : undefined,
        }}
      >
        {/* Logo with glow */}
        <div 
          className={`relative transition-all duration-500 ${
            phase === "glow" ? "drop-shadow-[0_0_60px_hsl(0_72%_51%)]" : ""
          }`}
        >
          <img 
            src={logo} 
            alt="CodeNestLabs" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>

        {/* Brand Name - Netflix style reveal */}
        <div className="mt-6 overflow-hidden">
          <h1 
            className={`font-display text-4xl md:text-6xl lg:text-7xl tracking-wider transition-all duration-700 ${
              phase === "zoom" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
            style={{
              transitionDelay: "0.5s",
            }}
          >
            <span className="text-white">CODE</span>
            <span className="text-primary">NEST</span>
            <span className="text-white">LABS</span>
          </h1>
        </div>

        {/* Tagline */}
        <p 
          className={`mt-4 text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase transition-all duration-500 ${
            phase === "zoom" ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transitionDelay: "1s",
          }}
        >
          Building the Future
        </p>
      </div>

      {/* Skip button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute bottom-8 right-8 text-muted-foreground/50 hover:text-white text-sm tracking-wide transition-colors"
      >
        Skip →
      </button>
    </div>
  );
};

export default Intro;
