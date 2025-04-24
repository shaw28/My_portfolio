import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/profile.jpg"
            alt="Kishore Avatar"
            className="rounded-full border-4 border-blue-500 shadow-xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 w-40 h-40 object-cover mb-4"
          />
          <h1 className="text-3xl font-extrabold text-gray-800">Kishore Shaw</h1>
          <p className="text-blue-600 text-sm mb-6">Full-Stack Developer & Cloud Enthusiast</p>

          <div className="flex gap-4 text-xl mb-6">
            <a href="https://github.com/shaw28" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><FaGithub /></a>
            <a href="https://linkedin.com/in/kishore-shaw28" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700"><FaLinkedin /></a>
            <a href="mailto:mrkishore28@gmail.com" className="text-gray-600 hover:text-red-600"><FaEnvelope /></a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/projects" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Explore Projects</Link>
            <Link to="/contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Let’s Connect</Link>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="/profile.jpg"
            alt="Kishore Hero"
            className="rounded-2xl shadow-xl w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
