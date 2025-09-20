export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive, and fast websites using React, Vite, and Tailwind CSS.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces with a focus on accessibility and smooth user experience.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications using Node.js, Express, and Laravel.",
      icon: "⚙️",
    },
    {
      title: "Database Management",
      description:
        "Experienced in handling MySQL, MongoDB, and Firebase for efficient data management.",
      icon: "🗄️",
    },
  ];

  return (
    <section
      id="services"
      className="bg-darkblue text-white pt-16 px-6 md:px-100 pb-16"
    >
      {/* Section Header */}
      <div className="text-center mb-12" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gold mb-6">My Services</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of the services I offer, combining design and
          development skills to build impactful digital experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
