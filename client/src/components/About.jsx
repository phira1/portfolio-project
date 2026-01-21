import AboutPanel from "./AboutPanel";

export default function About() {
  const panels = [
    {
      title: "Professional Bio",
      text: "I am Electronics & Communication Engineer with additional studies in BUMA, passionate about IoT, Web and Embedded Systems. I enjoy building projects that bridge hardware and software.",
      images: [
        "/assets/about/bio-1.png",
        "/assets/about/bio-2.jpg",
        "/assets/about/bio-3.png",
      ],
      reverse: false,
    },
    {
      title: "Education",
      text: "Completed my Electronics & Communication degree at Adama Science and Technology University (ASTU). Strong foundation in electronics and communication systems, skilled in Programming and building software projects",
      images: [
        "/assets/about/education-1.jpg",
        "/assets/about/education-2.jpg",
        "/assets/about/education-3.jpg",
      ],
      reverse: true,
    },
    {
      title: "Certifications & Training",
      text: "Completed Data Analysis Fundamentals, Fundamentals of Programming, CISCO Networking, IoT and Embedded Systems certifications and also other academic completion certificates.",
      images: [
        "/assets/about/certificate-1.png",
        "/assets/about/certificate-2.jpg",
        "/assets/about/certificate-3.jpg",
      ],
      reverse: false,
    },
    {
      title: "Languages",
      text: "Fluent in three languages: English, Afaan Oromoo and Amharic.",
      images: [
        "/assets/about/languages-1.jpg",
        "/assets/about/languages-2.jpg",
        "/assets/about/languages-3.jpg",
      ],
      reverse: true,
    },
    {
      title: "Skills",
      text: "Web Development, IoT, Embedded Systems, Programming, Networking, Electronics, Video editing , Graphics Designer",
      images: [
        "/assets/about/skills-1.jpg",
        "/assets/about/skills-2.jpg",
        "/assets/about/skills-3.jpg",
      ],
      reverse: false,
    },
    {
      title: "Projects",
      text: "Various academic and personal projects combining electronics, web apps and embedded solutions and additional big projects are on the way !",
      images: [
        "/assets/about/projects-1.jpg",
        "/assets/about/projects-2.jpg",
        "/assets/about/projects-3.jpg",
      ],
      reverse: true,
    },
    {
      title: "Internship & Experience",
      text: "Interned at Ambo University (AU) ICT Directorate and worked at Ethiotelecom, gaining real-world experience in ICT operations and networking and telecom infrastructures.",
      images: [
        "/assets/about/experience-1.jpg",
        "/assets/about/experience-2.jpg",
        "/assets/about/experience-3.jpg",
      ],
      reverse: false,
    },
    {
      title: "Contact Me",
      text: "Feel free to reach out! Click the button below to send a message directly via email.",
      images: [
        "/assets/about/contact-1.jpg",
        "/assets/about/contact-2.jpg",
        "/assets/about/contact-3.jpg",
      ],
      reverse: true,
      isContact: true, // 👈 important flag
    },
  ];

  return (
    <section id="about" className="px-4 md:px-20 py-16 bg-gray-50">
      <h1
        className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-16"
        data-aos="fade-down"
      >
        About Me
      </h1>

      {panels.map((panel, index) => (
        <AboutPanel
          key={index}
          title={panel.title}
          text={panel.text}
          images={panel.images}
          reverse={panel.reverse}
          isContact={panel.isContact}
        />
      ))}
    </section>
  );
}
