import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTools, FaCloud, FaCode, FaPalette, FaReact, FaNode, FaPython, FaAws, FaAngular, FaSass, FaJs, FaFigma } from "react-icons/fa";

const skills = [
  { icon: <FaCode />, label: "Full-Stack Dev", level: "Intermediate" },
  { icon: <FaPalette />, label: "UI/UX Design", level: "Proficient" },
  { icon: <FaCloud />, label: "Cloud (AWS/GCP)", level: "Learning" },
  { icon: <FaTools />, label: "DevOps / Automation", level: "Growing" }
];

const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Angular", icon: <FaAngular className="text-red-600" /> },
  { name: "Tailwind CSS", icon: <span className="text-blue-500 font-bold text-2xl">T</span> },
  { name: "SASS", icon: <FaSass className="text-pink-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
  { name: "Adobe XD", icon: <span className="text-indigo-600 font-bold text-xl">XD</span> }
];

const timeline = [
  { year: "2021", title: "Internship at SYSOUT", desc: "Built REST APIs and tested tools with Python and SQL." },
  { year: "2022", title: "Software Engineering at Accenture", desc: "Developed Angular UIs, integrated APIs, and monitored deployments on AWS." },
  { year: "2023", title: "Master’s in HCI at UCD", desc: "Expanded focus into Frontend, UI/UX research, and cloud architecture." },
  { year: "2024+", title: "Learning & Growing", desc: "Diving deeper into cloud-native apps and modern web tooling." },
];

const About = () => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8 mb-8">
          <img
            src={process.env.PUBLIC_URL + "/logos/Profile.jpg"}
            alt="Kishore Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 className="text-4xl font-bold text-blue-700">About Me</h2>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          Hi! I'm Kishore — a software engineer who’s passionate about solving real-world problems through elegant tech. I bring a blend of frontend creativity, backend logic, and growing cloud expertise to every project I take on.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          With a background Computer Science, Masters in Human-Computer Interaction and experience across startups and enterprise teams, I’ve built dynamic UIs, integrated scalable APIs, and embraced continuous learning in cloud technologies. I thrive on projects that challenge me to think bigger and build smarter.
        </p>
      </motion.div>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-blue-600">Core Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-lg text-center shadow hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-2 text-blue-600">{skill.icon}</div>
            <h4 className="font-semibold text-md">{skill.label}</h4>
            <p className="text-sm text-gray-500">{skill.level}</p>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-blue-600">Tech Stack</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-sm font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-blue-600">Certifications</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
        <li>
          <a href="https://www.credly.com/badges/4b82a179-620f-4704-bb80-65924aa9028d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            AWS Certified Cloud Practitioner (2023)
          </a>
        </li>
        <li>
          AWS Certified Solutions Architect – Associate (in progress)
        </li>
        <li>
          Web Development Bootcamp – Udemy (Completed)
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-4 text-blue-600">Learning Journey</h3>
      <div className="relative border-l-4 border-blue-200 pl-6 ml-4">
        {timeline.map((step, idx) => (
          <motion.div
            key={idx}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-5 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-700">{step.year} — {step.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => setShowExtra(!showExtra)}
          className="text-blue-600 font-medium underline hover:text-blue-800 transition"
        >
          {showExtra ? "Hide Fun Facts" : "Show Fun Facts & Extras"}
        </button>

        {showExtra && (
          <motion.div
            className="mt-6 max-w-3xl mx-auto text-left bg-blue-50 p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Fun Facts About Me</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>I enjoy team outings and bonding over good food and ideas.</li>
  <li>You’ll often find me on a football pitch or badminton court on weekends.</li>
  <li>Gaming helps me unwind — Multiplayer and Story-mode games are my jam.</li>
  <li>Big fan of movies, music, and spontaneous late-night hangouts.</li>
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
