import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Projects() {
  const projects = [
    {
      title: "SportZoneHub",
      images: [
        "/SportZoneHub/Picture1.png",
        "/SportZoneHub/Picture2.png",
        "/SportZoneHub/Picture3.png",
      ],
      description: "Responsive E-commerce Solution for Sports Shops",
      languages: ["PHP", "CodeIgniter", "Microsoft SQL Server"],
      problems: [
        "Enable sports shops to sell products online.",
        "Provide easy product management and checkout system.",
        "Create a responsive design for all devices.",
      ],
    },
    {
      title: "ABC Car Traders",
      images: [
        "/ABC Car Traders/Picture12.png",
        "/ABC Car Traders/Picture13.png",
        "/ABC Car Traders/Picture14.png",
      ],
      description: "Excellence in Cars and Services",
      languages: ["C#","Microsoft SQL Server"],
      problems: [
        "Simplify car trading with a web platform.",
        "Showcase available cars with detailed info and images.",
        "Provide a secure and responsive UI for buyers and sellers.",
      ],
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentImage(0);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImage(0);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="bg-darkblue py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gold mb-6 text-center">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>

          {/* Project Carousel */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg p-6 relative rounded-3xl border border-white">
            {/* Project Title */}
            <h2 className="text-3xl font-bold text-gold mb-4  text-center">{project.title}</h2>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-xl  text-center">{project.description}</p>

            {/* Languages */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2 text-lg text-center">
                Languages & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gold rounded-full text-sm border border-white"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Problems */}
            <div className="mb-6 text-center">
              <h4 className="text-white font-semibold mb-2 text-lg ">Problems Solved</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1 text-left inline-block">
                {project.problems.map((prob, i) => (
                  <li key={i}>{prob}</li>
                ))}
              </ul>
            </div>

            {/* Project Image with Project Navigation */}
            <div className="relative w-full mb-6 flex justify-center">
              <img
                src={project.images[currentImage]}
                alt={`${project.title} screenshot`}
                className="w-[350px] h-[200px] object-cover rounded-xl shadow-lg"
              />

              {/* Prev Project Button */}
              <button
                onClick={prevProject}
                className="absolute top-1/2 left-2 transform -translate-y-1/2
                           w-12 h-12 rounded-full flex items-center justify-center
                           shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-200"
              >
                <i className="fas fa-chevron-left text-gold text-2xl"></i>
              </button>

              {/* Next Project Button */}
              <button
                onClick={nextProject}
                className="absolute top-1/2 right-2 transform -translate-y-1/2
                           w-12 h-12 rounded-full flex items-center justify-center
                           shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-200"
              >
                <i className="fas fa-chevron-right text-gold text-2xl"></i>
              </button>
            </div>

            {/* Image Dots */}
            <div className="flex justify-center mb-6 space-x-2">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentImage === idx
                      ? "bg-gold"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
