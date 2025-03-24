
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, MailIcon } from "lucide-react";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-brand-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the VocalVerve community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive voice training tips, upcoming features, 
              and special offers to help you speak with confidence.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {submitted ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <MailIcon className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`pl-10 py-6 input-glow transition-all duration-300 ${
                  submitted ? "border-green-500 text-green-500" : ""
                }`}
                disabled={loading || submitted}
              />
              <Button
                type="submit"
                className={`absolute right-1 top-1 bottom-1 bg-brand-500 hover:bg-brand-600 transition-all duration-300 ${
                  submitted ? "bg-green-500 hover:bg-green-600" : ""
                }`}
                disabled={loading || submitted}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
                    <span>Subscribing...</span>
                  </div>
                ) : submitted ? (
                  "Subscribed!"
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeForm;
