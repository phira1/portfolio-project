import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-700 py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-blue-600 text-white placeholder-blue-200" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-blue-600 text-white placeholder-blue-200" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-blue-600 text-white placeholder-blue-200" rows={5}></textarea>
          <button className="mt-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-blue-100 transform hover:scale-105 transition duration-300">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
