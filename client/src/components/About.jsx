import AboutPanel from "./AboutPanel"

import profile from "../assets/about/profile.png"
import education from "../assets/about/education.jpg"
import certifications from "../assets/about/certifications.png"
import skills from "../assets/about/skills.jpg"
import projects from "../assets/about/projects.jpg"
import languages from "../assets/about/languages.jpg"
import internship from "../assets/about/internship.jpg"
import contact from "../assets/about/contact.jpg"

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <AboutPanel title="About Me" image={profile}>
          <p>
            I am <strong>Firaol Bekuma</strong>, an Electronics & Communication Engineer
            with a strong passion for IoT, embedded systems, and modern web technologies.
          </p>
          <p>
            I enjoy building real-world solutions that connect hardware and software
            to solve practical problems.
          </p>
        </AboutPanel>

        <AboutPanel title="Education" image={education} reverse>
          <p>
            <strong>BSc in Electronics & Communication Engineering</strong>
          </p>
          <p>
            Addis Ababa / Ambo University
          </p>
          <p>
            Additional studies in <strong>Business & Management (BUMA)</strong>
          </p>
        </AboutPanel>

        <AboutPanel title="Certifications & Training" image={certifications}>
          <ul className="list-disc pl-6">
            <li>Data Analysis Fundamentals</li>
            <li>Fundamentals of Programming</li>
            <li>Cisco Networking</li>
            <li>IoT & Embedded Systems</li>
          </ul>
        </AboutPanel>

        <AboutPanel title="Skills" image={skills} reverse>
          <ul className="list-disc pl-6">
            <li>HTML, CSS, JavaScript, React</li>
            <li>ESP32, Arduino, Embedded C</li>
            <li>Networking & System Support</li>
            <li>Git, Linux, Cloud Basics</li>
          </ul>
        </AboutPanel>

        <AboutPanel
          title="Projects"
          image={projects}
          buttonText="View Projects"
          buttonLink="#projects"
        >
          <p>
            I have worked on academic and personal projects involving IoT systems,
            smart automation, and responsive web applications.
          </p>
        </AboutPanel>

        <AboutPanel title="Languages" image={languages} reverse>
          <ul className="list-disc pl-6">
            <li>Afaan Oromo — Native</li>
            <li>English — Professional</li>
            <li>Amharic — Fluent</li>
          </ul>
        </AboutPanel>

        <AboutPanel title="Internship & Experience" image={internship}>
          <ul className="list-disc pl-6">
            <li>ICT Directorate — Ambo University</li>
            <li>EthioTelecom</li>
          </ul>
        </AboutPanel>

        <AboutPanel
          title="Let’s Connect"
          image={contact}
          reverse
          buttonText="Email Me"
          buttonLink="#contact"
        >
          <p>
            Interested in collaboration, opportunities, or just a conversation?
            Feel free to reach out.
          </p>
        </AboutPanel>

      </div>
    </section>
  )
}
