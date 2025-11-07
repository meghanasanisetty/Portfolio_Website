export default function SectionWrapper({ title, children }) {
  return (
    <section className="relative flex flex-col items-center justify-center px-8 md:px-20 py-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Glass card */}
      <div className="relative z-10 backdrop-blur-lg bg-white/5 p-10 md:p-16 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-white/10 max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-purple-400">{title}</h1>
        <div>{children}</div>
      </div>
    </section>
  );
}
