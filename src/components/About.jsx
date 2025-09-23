import HCL1 from "../assets/HCL_visit.jpg";
import HCL2 from "../assets/HCL_visit2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-16 bg-darkblue text-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gold mb-6">
        About Me
      </h1>
      <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Row 1: Image Left + Paragraph Right */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          <img
            src={HCL1}
            alt="Profile 1"
            className="rounded-2xl shadow-lg object-cover w-full md:w-1/2"
          />
          <p className="text-lg leading-relaxed w-full md:w-1/2 text-gray-400">
            I’m an IT undergraduate and aspiring software engineer with a deep
            passion for technology, problem-solving, and building impactful
            digital solutions. My journey in tech has been shaped by a strong
            academic foundation and hands-on project experience that helped me
            turn ideas into real-world applications.
          </p>
        </div>

        {/* Row 2: Image Left + Paragraph Right */}
        <div className="flex flex-col md:flex-row items-start gap-16">
          <img
            src={HCL2}
            alt="Profile 2"
            className="rounded-2xl shadow-lg object-cover w-full md:w-1/2"
          />
          <p className="text-lg leading-relaxed w-full md:w-1/2 text-gray-400">
            Currently, I’m working as a Junior Frontend Developer at Digiweb
            Solutions (Australia), where I design and maintain responsive,
            AI-powered websites, manage Google Ads campaigns, and integrate
            third-party tools like Stripe, PayPal, CRM systems, and marketing
            automation platforms. I love writing clean, scalable code and making
            sure the products I build are secure, user-friendly, and accessible
            across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
