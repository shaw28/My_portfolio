import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineering Associate",
    company: "Accenture",
    date: "Aug 2022 – Sep 2023",
    location: "Chennai, India",
    logo: "/logos/accenture.png",
    website: "https://www.accenture.com/",
    logoBg: "bg-white",
    tech: ["Angular", "AWS", "Jest", "CloudWatch"],
    description: [
      "Built 40+ Angular UI components for HAPS project (Michigan-based health platform).",
      "Integrated REST APIs, optimized responsiveness, reduced load times by 20%.",
      "Wrote Jest tests, deployed on AWS, monitored using CloudWatch."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "SYSOUT Solutions",
    date: "May 2021 – Jul 2022",
    location: "Chennai, India",
    logo: "/logos/sysout.png",
    website: "https://sysoutsolutions.in/",
    logoBg: "bg-black",
    tech: ["Python", "SQL", "Bootstrap", "Postman"],
    description: [
      "Contributed to internal tools with Python and SQL backends.",
      "Created REST APIs, worked with Bootstrap and Postman for UI and testing.",
      "Participated in UAT testing, cloud deployment, and QA workflows."
    ]
  }
];

function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">Professional Experience</h2>
      <div className="relative border-l-4 border-blue-300 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-4 relative"
          >
            <div className="absolute -left-5 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-center mb-3">
                <a href={exp.website} target="_blank" rel="noopener noreferrer">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={`w-10 h-10 mr-4 object-contain ${exp.logoBg} rounded shadow hover:scale-105 transition-transform`}
                  />
                </a>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <span className="block text-blue-600 font-medium">{exp.company}</span>
                  <span className="block text-sm text-gray-500">{exp.date} • {exp.location}</span>
                </div>
              </div>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
