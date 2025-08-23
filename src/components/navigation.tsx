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
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl sticky top-0 z-50">
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
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 font-semibold transition-all duration-300 rounded-xl ${
                    location === item.href
                      ? "text-white bg-gradient-to-r from-miami-teal to-miami-dark shadow-lg shadow-miami-teal/30 scale-105"
                      : "text-gray-700 hover:text-miami-teal hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md hover:scale-105"
                  }`}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {location === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-miami-teal to-miami-dark rounded-xl opacity-20 animate-pulse"></div>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Phone Number */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-miami-teal to-miami-dark hover:from-miami-dark hover:to-miami-teal text-white shadow-lg shadow-miami-teal/30 transition-all duration-300 hover:scale-105 rounded-xl px-6 py-3">
              <a href="tel:786-429-4511" data-testid="phone-button">
                <Phone className="w-4 h-4 mr-2" />
                786-429-4511
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="hover:bg-miami-teal/10 hover:scale-110 transition-all duration-300 rounded-xl"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative block px-6 py-4 font-semibold rounded-xl transition-all duration-300 ${
                  location === item.href
                    ? "text-white bg-gradient-to-r from-miami-teal to-miami-dark shadow-lg shadow-miami-teal/30"
                    : "text-gray-700 hover:text-miami-teal hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {location === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-miami-teal to-miami-dark rounded-xl opacity-20 animate-pulse"></div>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <Button asChild className="w-full mt-6 bg-gradient-to-r from-miami-teal to-miami-dark hover:from-miami-dark hover:to-miami-teal text-white shadow-lg shadow-miami-teal/30 transition-all duration-300 rounded-xl py-4">
              <a href="tel:786-429-4511" data-testid="mobile-phone-button">
                <Phone className="w-4 h-4 mr-2" />
                786-429-4511
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
