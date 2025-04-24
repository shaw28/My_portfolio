// File: src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";

// Inside your homepage route
<Route path="/" element={<Hero />} />


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-white to-blue-50 text-gray-900">
        {/* Header + Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-extrabold text-blue-600">kishore.codes</Link>
            <nav>
              <ul className="flex space-x-6 text-sm font-medium">
                <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
                <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
                <li><Link to="/experience" className="hover:text-blue-600">Experience</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                    <h2 className="text-5xl font-bold text-blue-700 mb-6 leading-tight">Kishore Shaw 👋</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Full-stack developer & cloud enthusiast focused on building high-impact products with elegant code and meaningful design. Currently exploring modern frontend stacks and scalable cloud infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Link to="/projects" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Explore Projects</Link>
                      <Link to="/contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Let’s Connect</Link>
                    </div>
                    <div className="flex gap-4 text-xl">
                      <a href="https://github.com/shaw28" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><FaGithub /></a>
                      <a href="https://linkedin.com/in/kishore-shaw28" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700"><FaLinkedin /></a>
                      <a href="mailto:mrkishore28@gmail.com" className="text-gray-600 hover:text-red-600"><FaEnvelope /></a>
                    </div>
                  </div>
                  <div className="hidden md:block">
                  <div className="flex flex-col items-center text-center md:text-left md:items-start">
  <img
    src="/logos/profile.jpg" 
    alt="Kishore Avatar"
    className="rounded-full border-4 border-blue-500 shadow-xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 w-40 h-60 object-cover mb-4"
  />
  <h1 className="text-2xl font-bold text-gray-800">Kishore Shaw</h1>
  <p className="text-sm text-blue-600">Full-Stack Developer & Cloud Enthusiast</p>
</div>


                  </div>
                </div>
              </section>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            Designed & built by Kishore Shaw · © {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
