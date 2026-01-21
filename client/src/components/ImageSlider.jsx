import { useState, useEffect } from "react";

export default function ImageSlider({ images = [], interval = 4000, alt = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(slider);
  }, [images, interval]);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
            current === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      ))}
    </div>
  );
}
