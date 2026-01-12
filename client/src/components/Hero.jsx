export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen pt-24 flex flex-col justify-center items-center
                 bg-gradient-to-r from-blue-600 to-blue-500
                 text-center px-4"
    >
      {/* Hero Title */}
      <h1
        className="text-5xl md:text-6xl font-bold text-white mb-4"
        data-aos="fade-down"
      >
        {import.meta.env.VITE_APP_NAME}
      </h1>

      {/* Subtitle */}
      <p
        className="text-xl md:text-2xl text-white mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Electronics & Communication Engineer | Web Developer
      </p>

      {/* Buttons with hover effect */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4" data-aos="zoom-in" data-aos-delay="400">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg
                           hover:bg-blue-100 transform hover:scale-110 transition duration-500">
          View Projects
        </button>
        <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg
                           hover:bg-white hover:text-blue-600 transform hover:scale-110 transition duration-500">
          Contact Me
        </button>
      </div>
    </div>
  )
}
