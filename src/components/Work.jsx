import DigiwebLogo from "../assets/Digiweb.jpg";
import EternalStackLogo from "../assets/EternalStack.png";

export default function Work() {
  const experiences = [
    {
      role: "Junior Frontend Developer",
      company: "Digiweb Solutions",
      logo: DigiwebLogo,
      period: "Jan 2025 – Jun 2025",
      description: [
        "Built and maintained responsive, AI-enhanced websites with regular content updates.",
        "Managed Google Ads, optimizing campaigns via keyword research, ad copy, and performance tracking.",
        "Ensured cross-browser and device compatibility with responsive design and testing.",
        "Participated in code reviews, writing clean, scalable, SEO-friendly, and secure code.",
        "Integrated APIs and third-party tools (CRM, Stripe, PayPal, social media) to enhance functionality.",
      ],
    },
    {
      role: "Senior Developer",
      company: "EternalStack Solutions",
      logo: EternalStackLogo,
      period: "Jul 2025 – Present",
      description: [
        "Architect and design scalable applications, ensuring performance, maintainability, and reliability.",
        "Mentor and lead development teams, perform code reviews, and promote best coding practices.",
        "Build and integrate frontend and backend components for seamless system functionality.",
        "Identify bottlenecks, debug complex issues, and optimize application performance.",
        "Collaborate with product managers, designers, and clients to deliver high-quality solutions on time.",
      ],
    },
  ];

  return (
    <section
      id="work"
      className="min-h-screen bg-darkblue text-white px-6 md:px-20 pt-16 pb-8"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gold mb-6">
        Work Experiences
      </h1>
      <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-white"
          >
            {/* Role */}
            <h2 className="text-2xl font-bold mb-2 text-gold">{exp.role}</h2>

            {/* Company + Logo */}
            <div className="flex items-center mb-3">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <p className="text-lg text-white font-semibold">{exp.company}</p>
            </div>

            {/* Period */}
            <p className="text-sm text-white mb-4">{exp.period}</p>

            {/* Description */}
            <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-white">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
