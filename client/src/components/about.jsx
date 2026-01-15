// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-16 px-4"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-600 mb-6">
          Hello! I’m <span className="font-semibold">Firaol Bekuma</span>, an Electronics & Embedded Systems Engineer
          with a passion for creating IoT projects and web applications. I specialize in
          ESP32 microcontroller projects, smart devices, and building modern, responsive
          websites using <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
        </p>

        <p className="text-gray-600 mb-6">
          I enjoy solving real-world problems with technology and continuously learning
          new skills. My portfolio showcases a mix of live web projects and academic
          embedded systems projects demonstrating both software and hardware expertise.
        </p>

        <p className="text-gray-600">
          Feel free to explore my projects below or reach out via <span className="font-semibold">LinkedIn</span> or
          <span className="font-semibold"> GitHub</span> for collaborations and inquiries.
        </p>
      </div>
    </section>
  );
}
