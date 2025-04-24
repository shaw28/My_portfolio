import React from "react";

function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">About Me</h2>
      <p className="text-lg leading-relaxed mb-6">
        Hey there! I'm Kishore, a full-stack developer and cloud enthusiast based in Dublin. With a strong foundation in computer science and a master's in Human-Computer Interaction from UCD, I love combining code, design, and cloud tech to build things that matter.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        I have 2+ years of experience in the software industry, having worked with Angular, React, Python, and AWS in both startup and enterprise environments. I thrive in collaborative, fast-moving teams and enjoy the process of transforming ideas into scalable products.
      </p>

      <h3 className="text-2xl font-semibold mt-10 mb-4">What I Do</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>⚡ Frontend Engineering with React, Tailwind, and design systems</li>
        <li>☁️ Cloud Infrastructure using AWS (Certified Cloud Practitioner)</li>
        <li>🛠 REST APIs, backend logic, and automation with Python & Node.js</li>
        <li>🎨 UI/UX with a focus on usability, accessibility, and user flow</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">React</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Angular</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Python</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Node.js</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">AWS</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Tailwind CSS</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">MySQL</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">GitHub</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Figma</span>
      </div>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Outside of Work</h3>
      <p className="text-lg leading-relaxed">
        I love exploring UI design trends, working on automation side-projects, and reading about ethical AI and inclusive tech. I'm always open to collaborations or chats about the future of tech!
      </p>
    </section>
  );
}

export default About;
