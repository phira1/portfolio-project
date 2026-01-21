import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutPanel({ title, text, images, reverse, isContact }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto mb-24">
      <div
        className={`flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Slider */}
        <motion.div
          className="relative w-full md:w-1/2 h-72 overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {text}
          </p>

          {/* EMAIL BUTTON — ONLY FOR CONTACT PANEL */}
          {isContact && (
             <button
               onClick={() => {
                 document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
               }}
               className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold
                          hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
             >
                Email Me
             </button>

          )}
        </motion.div>
      </div>
    </div>
  );
}
