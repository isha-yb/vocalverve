
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-semibold text-[#0a0960]">
                Vocal<span className="text-[#6f2586]">Verve</span>
              </span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering individuals to speak with confidence through
              innovative voice training technology and personalized coaching.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:vocalvervebiz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#f0e6f4] hover:border-[#6f2586] transition-colors duration-300"
              >
                <Mail size={18} className="text-[#6f2586]" />
              </a>
              <a
                href="https://www.instagram.com/vocalvervebiz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#f0e6f4] hover:border-[#6f2586] transition-colors duration-300"
              >
                <Instagram size={18} className="text-[#6f2586]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574559182458"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#f0e6f4] hover:border-[#6f2586] transition-colors duration-300"
              >
                <Facebook size={18} className="text-[#6f2586]" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} VocalVerve. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
