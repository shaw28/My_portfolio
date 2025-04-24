import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Let’s Connect</h2>
      <p className="text-center text-gray-700 text-lg mb-10">
        Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
      </p>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            ✅ Message sent successfully!
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
            headers: {
              Accept: "application/json",
            },
          })
            .then(() => setSubmitted(true))
            .catch(() => alert("Something went wrong. Please try again later."));

          setTimeout(() => setSubmitted(false), 4000);
        }}
        action="https://formspree.io/f/xoqgqkzj" // Replace with your Formspree form ID
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
          placeholder="Your Message..."
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
    </section>
  );
}

export default Contact;