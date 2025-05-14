import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Let's Connect!</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Whether it's about a project, collaboration, or a shared love for design systems or Tetris strategies — I'd love to chat!
      </p>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            ✅ Thanks for reaching out! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { Accept: "application/json" },
          })
            .then(() => setSubmitted(true))
            .catch(() => alert("Oops! Something went wrong. Please try again later."));

          setTimeout(() => setSubmitted(false), 4000);
        }}
        action="https://formspree.io/f/mkgrqvyl"
        method="POST"
        className="bg-white p-8 rounded-xl shadow-lg grid gap-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Type your message... or maybe your favourite UI trend 😄"
          required
          className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10 space-y-2">
        <p className="text-gray-600">Prefer socials? Reach me here 👇</p>
        <div className="flex justify-center gap-6 text-2xl text-blue-600">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/shaw28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/kishore-shaw28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:mrkishore28@gmail.com"
            className="hover:text-red-600"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.instagram.com/s.h.a.w__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
