import background from "../assets/Rifdhi.png";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center text-center h-screen px-6 md:px-20 lg:pl-32 gap-10 bg-darkblue"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // keeps the aspect ratio
        backgroundPosition: "right center", // pushes it right
      }}
    >
      {/* Overlay to make text readable on small screens */}
      <div className="absolute inset-0 bg-darkblue/70 md:hidden"></div>

      {/* Text Content */}
      <div
        className="relative max-w-3xl md:mr-auto md:ml-0 z-10"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Software Engineer</h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gold mb-6">
          Rifdhi Ramiz
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-400 pb-6 mb-6">
          As an aspiring software engineer, I specialize in designing and developing responsive,
          secure, and engaging web applications that make a real-world difference.
        </p>

        <a
          href="#projects"
          className="inline-block border-2 border-white text-gold bg-transparent px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
