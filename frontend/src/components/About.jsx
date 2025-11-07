import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden text-white">

      {/* Glowing background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Left Section */}
      <motion.div
        className="z-10 flex-1 space-y-6 text-center md:text-left backdrop-blur-lg bg-white/5 p-10 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-white/10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-purple-400 font-semibold">Hi, I’m</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Sanisetty Sri Meghana <span className="text-purple-500"></span>
        </h1>
        <p className="text-gray-300 leading-relaxed">
          A passionate <span className="text-purple-300 font-medium">Full Stack Developer</span> 
          who loves creating beautiful and meaningful web experiences that connect people and ideas.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/resume.pdf"
            className="bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded-lg text-white font-medium transition-transform transform hover:scale-105 shadow-lg"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-5 py-3 rounded-lg font-medium transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 pt-6 text-2xl">
          <a href="https://github.com/yourgithub" target="_blank" className="hover:text-purple-400 transition-transform transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-purple-400 transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-purple-400 transition-transform transform hover:scale-110">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
}
