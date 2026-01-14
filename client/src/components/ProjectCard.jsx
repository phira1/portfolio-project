// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, link, type, delay }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="mt-auto">
        {type === "live" ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg
                       hover:bg-blue-500 transition duration-300"
          >
            Live View
          </a>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 border border-gray-400 text-gray-800 font-semibold rounded-lg
                       hover:bg-gray-100 transition duration-300"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  )
}
