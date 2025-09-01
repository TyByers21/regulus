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
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/attached_assets/musicVideo_1755890638812.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white max-w-7xl mx-auto px-4 w-full">
        <div className="text-center md:text-right mx-auto md:mx-0 md:ml-auto max-w-2xl">
         {/* Logo */}
<div className="hidden md:flex justify-center md:justify-end">
  <img
    src="/attached_assets/regulusLogo_1755807882562.png"
    alt="Regulus Films Logo"
    className="h-28 sm:h-40 md:h-60 w-auto pb-4 md:pb-8 md:pr-12"
    data-testid="hero-logo"
  />
</div>


          {/* Heading */}
          <h1 className="text-4xl sm:text-7xl drop-shadow-lg font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Premium Video Production in
            <br />
            <span
              className={`text-5xl sm:text-7xl text-miami-teal inline-block transition-all duration-600 ${
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

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md mb-6 sm:mb-8 text-gray-300 leading-relaxed">
            High-end corporate and music video production company working with
            the biggest names in business and entertainment
          </p>

          {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end items-center sm:items-stretch">
  <Button
    asChild
    size="lg"
    className="w-64 sm:w-auto bg-miami-teal hover:bg-miami-dark text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
  >
    <Link href="/contact" data-testid="button-get-quote">
      Get Your Quote
    </Link>
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="w-64 sm:w-auto border-2 border-white text-black hover:bg-white hover:text-navy text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
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
