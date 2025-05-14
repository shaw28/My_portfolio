import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


const tags = [
  "React", "Python", "Figma", "UX Design", "AWS", "Node.js", "TailwindCSS", "GCP", "AR Interfaces"
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tags.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 text-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-5xl font-bold text-blue-700 mb-4 leading-tight flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Kishore Shaw <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
            >
              👋
            </motion.span>
          </motion.h1>
          <p className="text-lg mb-6">
            I’m a software engineer blending full-stack development with a designer’s touch and a cloud-first mindset. I enjoy turning complex ideas into seamless digital experiences that are as functional as they are perfect and required.
            <br /><br />
            I'm always learning, evolving, and leaning into areas where technology is heading — from design systems to cloud infrastructure!
          </p>

          <motion.div
            key={tags[index]}
            onClick={() => alert(`You're vibing with #${tags[index]}! 🚀`)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium shadow mb-6 cursor-pointer hover:scale-105 transition-transform"
          >
            Currently vibing with: #{tags[index]}
          </motion.div>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link to="/projects" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Explore Projects</Link>
            <Link to="/contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Let’s Connect</Link>
          </div>

          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/shaw28" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><FaGithub /></a>
            <a href="https://linkedin.com/in/kishore-shaw28" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700"><FaLinkedin /></a>
            <a href="mailto:mrkishore28@gmail.com" className="text-gray-600 hover:text-red-600"><FaEnvelope /></a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <motion.div className="relative group" initial={{ scale: 1.8 }} whileTap={{ scale: 1.25 }}>
            <motion.img
              src={process.env.PUBLIC_URL + "/logos/avatargif.gif"}
              alt="Developer Avatar"
              className="w-28 h-28 mb-4 rounded-full cursor-pointer"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 4, duration: 1.2 }}
              whileHover={{ scale: 1.2 }}
              onMouseMove={(e) => {
                const eye = e.currentTarget;
                const rect = eye.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                eye.style.transform = `rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
              }}
            />
  
</motion.div>
<br></br>
          <p className="text-lg italic mb-6 text-center">
            "Software Engineer with a Full-Stack Mindset,<br />Design Sensibility & Cloud Ambitions"
          </p>
          <p className="text-sm text-gray-600">Dublin, Ireland</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
