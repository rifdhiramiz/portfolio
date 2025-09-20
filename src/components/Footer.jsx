export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gray-400 py-8 px- md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Centered Row with text + icons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6">
          {/* Left - Logo/Name */}
          <div className="px-20">
            <h2 className="text-white text-xl font-bold">Rifdhi Ramiz</h2>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Divider line (optional) */}
          <span className="hidden md:block w-px h-6 bg-gray-600"></span>

          {/* Right - Social Links */}
          <div className="flex space-x-6 text-2xl px-20">
            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rifdhi-ramiz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/rifdhi.ramiz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-facebook"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/rifdhi.ramiz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
