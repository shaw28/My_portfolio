import React from "react";

const projectData = [
  {
    title: "Machine UI for Mach 4.0",
    description: "UX design for an AI-integrated platform with user research, usability testing, and iterative UI design.",
    tags: ["Figma", "UX Research", "AI UI"],
    link: "#"
  },
  {
    title: "Multilingual File Translator",
    description: "Automated translation with Google Cloud Functions, Make.com integration, OCR + Translation API.",
    tags: ["GCP", "Cloud Functions", "Make.com"],
    link: "#"
  },
  {
    title: "Crop Recommendation System",
    description: "Web dashboard using IoT sensors and ML model (KNN) for real-time crop suggestions.",
    tags: ["IoT", "KNN", "React"],
    link: "#"
  },
  {
    title: "Covid Tracker App",
    description: "Real-time visualization of COVID-19 stats in India using Co-Win API and GitHub Pages.",
    tags: ["React", "Co-Win API", "Chart.js"],
    link: "#"
  }
];

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600 hover:scale-[1.02] p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
