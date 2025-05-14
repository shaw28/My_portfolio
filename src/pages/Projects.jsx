import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "UX Design for Mach 4.0",
    description: "Led UX research and HMI design for a smart factory simulator using Figma and stakeholder feedback.",
    skills: ["UX", "HMI", "AI", "Figma"],
    link: "https://www.figma.com/proto/M9WmMCYdgO27Oj3JzC03l0/Portfolio?page-id=155%3A2&node-id=266-5934&node-type=CANVAS&viewport=365%2C206%2C0.02&t=is5KdtZ4KCaBs0BA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=266%3A5934&show-proto-sidebar=1",
    image: process.env.PUBLIC_URL + "/assets/projects/mach4.0.png",
    pdf: process.env.PUBLIC_URL + "/assets/projects/Mach.pdf"
  },
  {
    title: "COVID-19 Tracker Web App (India)",
    description: "Built a Co-WIN powered dashboard for Indian COVID stats using JavaScript and Chart.js.",
    skills: ["JavaScript", "Data Viz", "API"],
    link: "https://shaw28.github.io/vaxxineup/",
    image: null,
    pdf: null
  },
  {
    title: "BuildEase AR",
    description: "Created an AR solution for interactive product assembly using multi-modal feedback and accessibility features.",
    skills: ["AR", "UX", "Accessibility"],
    image: process.env.PUBLIC_URL + "/assets/projects/buildeaseAR.png",
    pdf: process.env.PUBLIC_URL + "/assets/projects/BuildEase AR pdf.pdf"
  },
  {
    title: "Automated Multilingual File Translation",
    description: "Automated translation flow using Make.com, GCP Translate API, OCR, and Cloud Functions.",
    skills: ["Cloud", "OCR", "GCP", "Automation"],
    image: process.env.PUBLIC_URL + "/assets/projects/MAKE.png",
    pdf: null
  },
  {
    title: "Statistical Analysis on Voice Interfaces",
    description: "Correlated mental workload (NASA RTLX) and usability (SUS) using SPSS and Excel from 100-participant dataset.",
    skills: ["Stats", "SPSS", "UX Research"],
    image: null,
    pdf: process.env.PUBLIC_URL + "/assets/projects/QDA.pdf"
  },
  {
    title: "IoT & ML Crop Recommendation Dashboard",
    description: "Used KNN on NPK sensor data and Kaggle dataset to recommend optimal crops with 92% accuracy.",
    skills: ["IoT", "ML", "Dashboard"],
    image: null,
    pdf: process.env.PUBLIC_URL + "/assets/projects/Final_Thesis.pdf"
  }
 
];

const allTags = ["All", ...new Set(projects.flatMap(p => p.skills))];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const filtered = selectedTag === "All" ? projects : projects.filter(p => p.skills.includes(selectedTag));

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-blue-700 text-center">Project Showcase</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 rounded-full text-sm border transition ${selectedTag === tag ? "bg-blue-600 text-white" : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"}`}
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex flex-col"
          >
            {proj.image && (
              <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover rounded mb-4" />
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{proj.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{proj.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proj.skills.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto text-sm space-y-1">
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Project ↗
                </a>
              )}
              {proj.pdf && (
                <a href={proj.pdf} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline block">
                  View Report (PDF)
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.linkedin.com/in/kishore-shaw28/details/projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          See More on LinkedIn ↗
        </a>
      </div>
    </section>
  );
};

export default Projects;