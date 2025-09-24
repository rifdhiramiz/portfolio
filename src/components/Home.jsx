import background from "../assets/Rifdhi.png";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center text-center h-screen px-6 md:px-20 lg:pl-32 gap-10 bg-darkblue bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "auto 70%", // height 70% of container, width auto
        backgroundPosition: "70% center", // moved slightly towards center
      }}
    >
      {/* Text on the Left */}
      <div
        className="max-w-3xl md:mr-auto md:ml-0"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <h2 className="text-xl text-gray-400 mb-6">
          Software Engineer
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gold mb-6">
          Rifdhi Ramiz
        </h1>

        <p className="text-lg md:text-xl text-gray-400 pb-6 mb-6">
          As an aspiring software engineer, I specialize in designing and developing responsive,
          secure, and engaging web applications that make a real-world difference.
        </p>

        <a
          href="#projects"
          className="border-2 border-white text-gold bg-transparent px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
