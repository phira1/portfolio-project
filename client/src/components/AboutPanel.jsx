import { motion } from "framer-motion"

export default function AboutPanel({
  title,
  children,
  image,
  reverse = false,
  buttonText,
  buttonLink,
}) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Text */}
      <motion.div
        className="md:w-1/2 text-gray-700"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-blue-700 mb-4">{title}</h3>
        <div className="space-y-3 text-lg">{children}</div>

        {buttonText && (
          <a
            href={buttonLink}
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
                       hover:bg-blue-500 transition"
          >
            {buttonText}
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}
