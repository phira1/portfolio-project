import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            type={project.type}
            delay={project.delay}
          />
        ))}
      </div>
    </section>
  )
}
