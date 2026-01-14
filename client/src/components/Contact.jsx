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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-blue-600 text-white placeholder-blue-200"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-blue-600 text-white placeholder-blue-200"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded bg-blue-600 text-white placeholder-blue-200"
          />

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded
                       hover:bg-blue-100 transform hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
