
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "#hero-section", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/dfa14e20-d0b0-4877-a494-6e244098657b.png" 
              alt="VocalVerve Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl font-semibold text-[#0a0960]">
                Vocal<span className="text-[#6f2586]">Verve</span>
              </span>
              <span className="text-xs text-[#6f2586] font-medium -mt-1">SPEAK WITH CONFIDENCE</span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full flex items-center">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="subtle-underline text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          {/* Mobile Menu Button */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden"
                  aria-label="Toggle Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[75vw] sm:w-[350px] pt-12">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium hover:text-[#6f2586] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}

          <a 
            href="#features" 
            className="bg-[#6f2586] hover:bg-[#5a1e6e] button-glow text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
