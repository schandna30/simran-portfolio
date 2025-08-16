function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Hi, I'm <span className="text-blue-600">Simran Chandna</span>
      </h1>
      <h2 className="text-2xl text-gray-700 mb-6">
        Salesforce Developer 
      </h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-8">
        Passionate about building scalable Salesforce solutions with Apex, LWC,
        and integrations.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/SIMRANSALESFORCEDEV-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
