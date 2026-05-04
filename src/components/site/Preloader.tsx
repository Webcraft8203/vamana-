import { useEffect, useState } from "react";
import logo from "@/assets/vamana-logo.png";

interface PreloaderProps {
  isLoading: boolean;
}

export const Preloader = ({ isLoading }: PreloaderProps) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Delay unmounting by 500ms to allow the CSS fade-out transition to complete
      const timer = setTimeout(() => setIsMounted(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary bg-gradient-to-br from-primary via-white/5 to-primary transition-opacity duration-500 ease-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Noise to match Hero */}
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />

      {/* Depth & Premium Lighting Effects */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[120px] pointer-events-none sm:motion-safe:animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-white/5 blur-[120px] pointer-events-none sm:motion-safe:animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative flex flex-col items-center justify-center sm:motion-safe:animate-logo-intro z-10">
        {/* Subtle premium glow strictly behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gold/15 blur-[60px] rounded-full pointer-events-none sm:motion-safe:animate-pulse-glow" />
        
        <img
          src={logo}
          alt="Vamana Insurance"
          // "brightness-0 invert" forces the logo to pure white to contrast the dark background perfectly
          className="relative z-10 h-10 sm:h-12 w-auto object-contain brightness-0 invert"
        />
        
        {/* Tagline & Loader */}
        <div className="mt-8 flex flex-col items-center sm:motion-safe:animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-white/60 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-center">
            Protecting what matters most
          </p>
          
          {/* Minimalist Premium Loading Line */}
          <div className="mt-6 h-[1px] w-24 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent sm:motion-safe:animate-loading-line" />
          </div>
        </div>
      </div>
    </div>
  );
};