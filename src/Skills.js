function Skills() {
  const skills = [
    "Apex",
    "Lightning Web Components (LWC)",
    "SOQL / SOSL",
    "Salesforce Administration",
    "JavaScript (ES6+)",
    "React",
    "SQL",
    "HTML & CSS",
    "Git / GitHub",
    "AWS Basics"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <p className="font-medium text-gray-700">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
