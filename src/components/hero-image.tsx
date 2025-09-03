import React from "react";
import { Button } from "@/components/ui/button";

const HeroImage = () => {
  return (
    <section className="relative w-full pt-20 md:pt-12">
      {/* Background */}
      <img
        src="/images/hero1.jpg"
        alt="Hero"
        className="w-full h-auto md:h-screen object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-row ">
      <div className="flex-1 pt-20 flex flex-col items-center bg-black/20">
      <img src="/attached_assets/regulusLogo_1755807882562.png" alt="Regulus Films Logo" className="h-28 sm:h-40 md:h-60 w-auto pt-4 md:pt-8 pl-4 md:pl-8" data-testid="hero-logo"/>
      </div>
        {/* Left (Corporate) */}
        <div className="flex-initial flex flex-col items-center justify-end pt-48 bg-black/20 text-center p-2 sm:p-4 md:p-16">
          <h1 className="text-white drop-shadow-lg text-sm xs:text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Corporate Video Production
          </h1>
          <p className="text-white text-xs  md:text-lg mb-2 sm:mb-4 leading-tight">Professional storytelling for brands and organizations</p>
          <Button
            asChild
            className="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base lg:text-lg rounded-lg sm:rounded-xl"
          >
            <a href="/corporate-videos">Learn More</a>
          </Button>
        </div>

        {/* Right (Music) */}
        <div className="flex-initial flex flex-col items-center justify-end pt-48 bg-black/20 text-center p-2 sm:p-4 md:p-16">
          <h1 className="text-white drop-shadow-lg text-sm xs:text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Music Video Production
          </h1>
           <p className="text-white text-xs md:text-lg mb-2 sm:mb-4 leading-tight">Creative visuals that bring your sound to life</p>
          <Button
            asChild
            className="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base lg:text-lg rounded-lg sm:rounded-xl"
          >
            <a href="/music-videos">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
