
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import SubscribeForm from "@/components/SubscribeForm";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <SubscribeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
