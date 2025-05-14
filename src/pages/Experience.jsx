import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineering Associate",
    company: "Accenture",
    date: "Aug 2022 – Sep 2023",
    location: "Chennai, India",
    website: "https://www.accenture.com/",
    logo: process.env.PUBLIC_URL + "/logos/accenture.png",
    highlights: [
    
      "Designed UI components in Adobe XD and developed 40+ web UI pages using Angular.",
      "Used GitHub for version control, code reviews, and auditing workflows.",
      "Collaborated across design, QA, and testing teams to align product delivery.",
      "Tested APIs using Postman and wrote unit tests using Jest."
    ],
    skills: ["Angular", "Adobe XD", "GitHub", "Postman", "Jest", "Team Collaboration"]
  },
  {
    title: "Software Engineer Intern",
    company: "SYSOUT Solutions",
    date: "May 2021 – Jul 2022",
    location: "Chennai, India",
    website: "https://sysoutsolutions.in/",
    logo: process.env.PUBLIC_URL + "/logos/sysout.png",
    highlights: [
      "Built backend services using Python and SQL for internal tools.",
      "Tested and validated REST APIs with Postman.",
      "Observed and supported cloud monitoring and deployment workflows.",
      "Collaborated with engineers and QA team on UAT and release cycles."
    ],
    skills: ["Python", "SQL", "Postman", "Cloud Deployment", "UAT", "Communication","Cloud solutions"]
  }
];

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-blue-700 text-center">Professional Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-blue-600"
          >
            <div className="flex items-center mb-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 mr-4 object-contain bg-black rounded border"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.date} • {exp.location}</p>
              </div>
            </div>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2">
  {exp.company === "Accenture" && (
    <li>
      Worked on <a href="https://www.hap.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HAP</a> — a Michigan-based U.S. healthcare platform.
    </li>
  )}
  {exp.highlights.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>


            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 space-x-4">
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Visit Company Website ↗
              </a>
              {exp.title.includes("Accenture") && (
                <a
                  href="https://www.hap.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View HAP Project ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
