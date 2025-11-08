import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.1, duration: 0.5 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-8 md:px-20 py-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Glass card container */}
      <div className="relative z-10 backdrop-blur-lg bg-white/5 p-10 md:p-16 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-white/10 max-w-5xl w-full">
        <h1 className="text-4xl font-extrabold text-purple-400 text-center mb-10">
          My Projects
        </h1>

        {projects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-purple-200 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-400">No projects to display.</p>
        )}
      </div>
    </section>
  );
}
