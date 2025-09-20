import { FaLaptopCode, FaServer, FaDatabase, FaPaintBrush } from "react-icons/fa";
import { SiFigma, SiCanva, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export default function Skills() {
  // Compact skillCard (less padding, inline feel)
  const skillCard = (IconComponent, color, name) => (
    <div className="flex items-center space-x-2 bg-secondary px-3 py-2 rounded-lg shadow hover:scale-105 transform transition duration-300">
      {typeof IconComponent === "string" ? (
        <i className={`${IconComponent} text-lg`} style={{ color }}></i>
      ) : (
        <IconComponent className="text-lg" style={{ color }} />
      )}
      {/* Changed text color */}
      <h3 className="text-base font-semibold text-gray-400">{name}</h3>
    </div>
  );

  const sections = [
    {
      title: "Frontend Development",
      icon: FaLaptopCode,
      color: "text-gold",
      key: "frontend",
      skills: [
        ["fab fa-html5", "#FFFFFF", "HTML"],
        ["fab fa-css3-alt", "#FFFFFF", "CSS"],
        ["fab fa-js-square", "#FFFFFF", "JavaScript"],
        ["fab fa-react", "#FFFFFF", "React"],
      ],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "text-gold",
      key: "backend",
      skills: [
        ["fab fa-node", "#FFFFFF", "Node.js"],
        ["fab fa-laravel", "#FFFFFF", "Laravel"],
      ],
    },
    {
      title: "Database Management",
      icon: FaDatabase,
      color: "text-gold",
      key: "database",
      skills: [
        ["fas fa-database", "#FFFFFF", "MySQL"],
        ["fas fa-leaf", "#FFFFFF", "MongoDB"],
      ],
    },
    {
      title: "Design Tools",
      icon: FaPaintBrush,
      color: "text-gold",
      key: "design",
      skills: [
        [SiFigma, "#FFFFFF", "Figma"],
        [SiCanva, "#FFFFFF", "Canva"],
        [SiAdobephotoshop, "#FFFFFF", "Adobe Photoshop"],
        [SiAdobeillustrator, "#FFFFFF", "Adobe Illustrator"],
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-8 py-16 bg-darkblue text-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gold mb-6">
        My Skills
      </h1>
      <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>

      <p className="mb-10 text-center text-white text-2xl">
        Technologies and tools I work with 💻
      </p>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* First Row: Frontend + Backend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(0, 2).map((section) => (
            <div key={section.key} className="bg-[#1f2b3d] rounded-2xl shadow-lg p-4">
              {/* Title */}
              <div className={`flex items-center text-xl font-semibold mb-4 ${section.color}`}>
                <section.icon className="mr-2" />
                <span>{section.title}</span>
              </div>

              {/* Skills grid - tighter spacing */}
              <div className="flex flex-wrap gap-3">
                {section.skills.map((s, idx) => skillCard(...s))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: Database + Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(2, 4).map((section) => (
            <div key={section.key} className="bg-[#1f2b3d] rounded-2xl shadow-lg p-4">
              {/* Title */}
              <div className={`flex items-center text-xl font-semibold mb-4 ${section.color}`}>
                <section.icon className="mr-2" />
                <span>{section.title}</span>
              </div>

              {/* Skills grid - tighter spacing */}
              <div className="flex flex-wrap gap-3">
                {section.skills.map((s, idx) => skillCard(...s))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
