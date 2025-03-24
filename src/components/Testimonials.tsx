
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Define the testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: 4 | 5;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khushi Gupta",
    role: "Public Speaker",
    content: "VocalVerve transformed my presentation skills. I now speak with confidence in front of large audiences.",
    rating: 5,
  },
  {
    id: 2,
    name: "Pranav Jain",
    role: "Business Executive",
    content: "The personalized coaching helped me communicate more effectively with my team and clients.",
    rating: 5,
  },
  {
    id: 3,
    name: "Isha Amoncar",
    role: "Podcast Host",
    content: "My voice sounds more professional and engaging since using VocalVerve's training techniques.",
    rating: 4,
  },
  {
    id: 4,
    name: "Shubh Agarwal",
    role: "Teacher",
    content: "VocalVerve helped me engage my students better with a more confident and clear speaking voice.",
    rating: 5,
  },
  {
    id: 5,
    name: "Piyush Singh",
    role: "Sales Representative",
    content: "I've closed more deals since improving my vocal presence with VocalVerve's expert guidance.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#0a0960] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from individuals who have transformed their speaking abilities with VocalVerve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#f0e6f4] text-[#6f2586] flex items-center justify-center font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-[#6f2586] fill-[#6f2586]"
                        />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star
                          key={i + testimonial.rating}
                          size={16}
                          className="text-gray-300"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
