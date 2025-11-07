import SectionWrapper from "../components/SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper title="Projects">
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white/10 rounded-xl p-6 shadow hover:shadow-purple-500/30 transition">
          <h3 className="text-xl font-semibold text-purple-400">Career Path Recommendation System</h3>
          <p className="text-gray-300 mt-2">
            ML-based web app that recommends career paths based on interests and skills.
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-6 shadow hover:shadow-purple-500/30 transition">
          <h3 className="text-xl font-semibold text-purple-400">Fashion Style Book App</h3>
          <p className="text-gray-300 mt-2">
            Flutter app that helps users create, store, and share personalized fashion looks.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
