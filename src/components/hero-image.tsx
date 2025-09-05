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

      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-row">
        {/* Left (Corporate) */}
        <div className="flex-1 flex flex-col items-center justify-end pt-48 text-center p-2 sm:p-4 md:p-16">
          <h1 className="text-white drop-shadow-lg text-sm xs:text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Corporate Video Production
          </h1>
          <p className="text-white text-xs md:text-lg mb-2 sm:mb-4 leading-tight">
            Professional storytelling for brands and organizations
          </p>
          <Button
            asChild
            className="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base lg:text-lg rounded-lg sm:rounded-xl"
          >
            <a href="/corporate-videos">Learn More</a>
          </Button>
        </div>

        {/* Right (Music) */}
        <div className="flex-1 flex flex-col items-center justify-end pt-48 text-center p-2 sm:p-4 md:p-16">
          <h1 className="text-white drop-shadow-lg text-sm xs:text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Music Video Production
          </h1>
          <p className="text-white text-xs md:text-lg mb-2 sm:mb-4 leading-tight">
            Creative visuals that bring your sound to life
          </p>
          <Button
            asChild
            className="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base lg:text-lg rounded-lg sm:rounded-xl"
          >
            <a href="/music-videos">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Top-right title */}
      <div className="absolute pt-24 md:pt-32 top-6 text-center right-6 w-full">
        <h1 className="font-display text-white text-xl sm:text-2xl md:text-4xl  font-extrabold text-center md:text-right  drop-shadow-2xl">
  Regulus Films<br/> & Entertainment
</h1>
      </div>
    </section>
  );
};

export default HeroImage;
