
import React from "react";
import { motion } from "framer-motion";
import { 
  Mic, 
  PenTool, 
  Gauge, 
  Users, 
  BarChart, 
  LifeBuoy 
} from "lucide-react";

const features = [
  {
    icon: <Mic className="h-6 w-6 text-brand-500" />,
    title: "Voice Analysis",
    description: "Advanced AI-powered analysis of your voice patterns, tone, and clarity.",
  },
  {
    icon: <PenTool className="h-6 w-6 text-brand-500" />,
    title: "Personalized Coaching",
    description: "Tailored exercises and feedback designed to enhance your unique voice.",
  },
  {
    icon: <Gauge className="h-6 w-6 text-brand-500" />,
    title: "Real-time Feedback",
    description: "Instant insights and suggestions as you practice your speaking skills.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    title: "Community Support",
    description: "Connect with fellow speakers and share your journey to confident speech.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-brand-500" />,
    title: "Progress Tracking",
    description: "Visualize your improvement over time with comprehensive analytics.",
  },
  {
    icon: <LifeBuoy className="h-6 w-6 text-brand-500" />,
    title: "Expert Resources",
    description: "Access a library of professional techniques and practical exercises.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wide">
              FEATURES
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elevate your speaking skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how VocalVerve can transform your communication abilities
              and help you speak with unshakable confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-100 transition-all duration-300"
            >
              <div className="bg-brand-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
