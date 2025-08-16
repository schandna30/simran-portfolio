function Projects() {
  const projects = [
    {
      title: "E-Commerce Website (BuyGadgets)",
      description:
        "Built a fully functional e-commerce site with user and guest checkout, tech product catalog, and PayPal payment integration.",
      tech: ["JavaScript", "Node.js", "HTML", "CSS"],
      link: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "COVID Prediction App",
      description:
        "Developed a machine learning app using Logistic Regression, Random Forest, and Gradient Boosting to predict COVID likelihood from symptoms.",
      tech: ["Python", "ML Models", "Flask"],
      link: "https://github.com/yourusername/covid-prediction"
    },
    {
      title: "Grocery Store App",
      description:
        "A React + Firebase app for browsing products, adding to cart, and placing COD orders, with an admin panel for inventory management.",
      tech: ["React", "Firebase", "Firestore"],
      link: "https://github.com/yourusername/grocery-app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 shadow rounded-xl hover:shadow-lg transition text-left"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
