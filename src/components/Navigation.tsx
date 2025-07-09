
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
            >
              Rural Craft Escapes
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('destinations-section')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('booking-section')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Book Now
            </button>
            <Button
              onClick={() => scrollToSection('booking-section')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={scrollToTop}
                className="text-left text-gray-700 hover:text-green-600 transition-colors px-3 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('destinations-section')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors px-3 py-2"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('booking-section')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors px-3 py-2"
              >
                Book Now
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('booking-section')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
