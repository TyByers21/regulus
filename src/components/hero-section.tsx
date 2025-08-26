import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export function HeroSection() {
  const cities = [
    "Miami",
    "New York",
    "Los Angeles",
    "London",
    "Paris",
    "Tokyo",
    "Dubai",
    "Sydney",
    "Berlin",
    "Toronto",
  ];

  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
        setIsAnimating(false);
      }, 300); // Half of transition duration
    }, 3000); // Change city every 3 seconds

    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/attached_assets/musicVideo_1755890638812.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white max-w-7xl mx-auto px-4 w-full">
        <div className="text-center md:text-right mx-auto md:mx-0 md:ml-auto max-w-2xl">
          <div className="flex justify-center md:justify-end mb-8">
            <img 
  src="/attached_assets/regulusLogo_1755807882562.png"
  alt="Regulus Films Logo" 
  className="h-60 pb-8 md:pr-12 w-auto" 
  data-testid="hero-logo" 
/>


          </div>
          <h1 className="text-6xl drop-shadow-lg md:text-7xl font-bold mb-6 leading-tight">
            Premium Video Production in
            <br />
            <span
              className={`text-miami-teal inline-block transition-all duration-600 ${
                isAnimating
                  ? "opacity-0 transform -translate-y-2"
                  : "opacity-100 transform translate-y-0"
              }`}
              style={{
                textShadow:
                  "0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.3), 0 0 60px rgba(20, 184, 166, 0.2)",
                filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))",
              }}
            >
              {cities[currentCityIndex]}
            </span>
          </h1>
          <p className="text-xl drop-shadow-md md:text-2xl mb-8 text-gray-300 leading-relaxed">
            High-end corporate and music video production company working with
            the biggest names in business and entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Button
              asChild
              size="lg"
              className="bg-miami-teal hover:bg-miami-dark text-white text-lg px-8 py-4"
            >
              <Link href="/contact" data-testid="button-get-quote">
                Get Your Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-miami-teal hover:bg-miami-dark text-white text-lg px-8 py-4"
            >
              <Link href="/homePage" data-testid="button-get-quote">
                Old Homepage
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-black hover:bg-white hover:text-navy text-lg px-8 py-4"
            >
              <Link href="/music-videos" data-testid="button-view-work">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
