import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/music-videos", label: "Music Videos" },
    { href: "/corporate-videos", label: "Corporate Videos" },
    { href: "/movies", label: "Movies" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="backdrop-blur-lg bg-white/10  shadow-xl fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <img
                src="/attached_assets/regulusLogo_1755807882562.png"
                alt="Regulus Films & Entertainment Logo"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                data-testid="logo-image"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-2 font-semibold transition-all duration-300 mr-2 rounded-xl ${
                    location === item.href
                      ? "text-white bg-gradient-to-r from-miami-teal to-miami-dark shadow-lg shadow-miami-teal/30 scale-105"
                      : "text-yellow-500 drop-shadow-md hover:text-miami-teal hover:bg-white/10"
                  }`}
                  data-testid={`nav-link-${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {location === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-miami-teal to-miami-dark rounded-xl opacity-20 animate-pulse"></div>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Phone */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-miami-teal to-miami-dark hover:from-miami-dark hover:to-miami-teal text-white shadow-lg shadow-miami-teal/30 transition-all duration-300 hover:scale-105 rounded-xl px-6 py-3"
            >
              <a href="tel:786-429-4511" data-testid="phone-button">
                <Phone className="w-4 h-4 mr-2" />
                786-429-4511
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="rounded-xl p-2 bg-gray-500/10 backdrop-blur-md border border-black/50 shadow-lg 
                         hover:bg-white/80 hover:scale-110 transition-all duration-300"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7 text-black drop-shadow-[0_0_8px_rgba(20,184,166,0.7)]" />
              ) : (
                <Menu className="h-7 w-7 text-black drop-shadow-[0_0_8px_rgba(20,184,166,0.7)]" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Dimmed background */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-out panel */}
          <div
            className="absolute top-20 right-0 h-full w-2/3 sm:w-1/2  backdrop-blur-xl 
                       border-l border-white/20 opacity-10 shadow-2xl p-6 animate-slideInRight flex flex-col"
          >
            <div className="flex flex-col items-end  space-y-4  bg-navy border backdrop-blur-xl border-white/20 rounded-2xl p-6 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full text-center text-lg font-semibold px-5 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 ${
                    location === item.href
                      ? "text-white bg-gradient-to-r from-miami-teal to-miami-dark shadow-lg shadow-miami-teal/40"
                      : "text-white hover:text-gray-900 hover:bg-white/40"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
