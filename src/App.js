import React from "react";
import { Routes, Route, Link, HashRouter as Router } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";

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
            <Route path="/" element={<Hero />} />
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
