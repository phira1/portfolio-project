export default function ProjectCard({ title, description, link, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white shadow-md rounded-lg p-6
                 hover:shadow-xl transform hover:-translate-y-2
                 transition duration-500"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <a
        href={link}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
      >
        View Project
      </a>
    </div>
  )
}
