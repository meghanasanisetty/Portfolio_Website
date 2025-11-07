import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper title="Contact Me">
      <p className="text-gray-300 mb-6">
        I’d love to collaborate or just chat about tech & creativity! 🌸  
        Feel free to reach out via email or LinkedIn.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:youremail@example.com"
          className="bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-5 py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}
