import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <div
      id="home"
      className="relative overflow-hidden min-h-screen pt-24
                 flex flex-col justify-center items-center
                 bg-gradient-to-r from-blue-600 to-blue-500
                 text-center px-4"
    >
      {/* Animated background */}
      <HeroBackground />

      {/* Profile Image */}
      <img
        src="/images/profile.png"
        alt="Firaol Bekuma"
        className="w-36 h-36 rounded-full mb-6
                   border-4 border-white shadow-xl
                   animate-float"
        data-aos="zoom-in"
      />

      {/* Hero Title */}
      <h1
        className="text-5xl md:text-6xl font-bold text-white mb-4"
        data-aos="fade-down"
      >
        {import.meta.env.VITE_APP_NAME}
      </h1>

      {/* Subtitle */}
      <p
        className="text-xl md:text-2xl text-white mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Electronics & Communication Engineer | Web Developer
      </p>

      {/* Skill Icons */}
      <div
        className="flex gap-6 justify-center mb-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <img src="/icons/react.svg" className="w-8 hover:scale-125 transition" />
        <img src="/icons/javascript.svg" className="w-8 hover:scale-125 transition" />
        <img src="/icons/esp32.svg" className="w-8 hover:scale-125 transition" />
        <img src="/icons/iot.svg" className="w-8 hover:scale-125 transition" />
      </div>

      {/* Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg
                     hover:bg-blue-100 transform hover:scale-110 transition duration-500"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-white text-white font-semibold rounded-lg
                     hover:bg-white hover:text-blue-600 transform hover:scale-110 transition duration-500"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}
