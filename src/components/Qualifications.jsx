export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="px-8 py-16 bg-darkblue text-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Section Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gold mb-4">
        Qualifications
      </h1>
      <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center border border-white">
          <div>
            <h2 className="text-2xl font-bold text-gold">London Metropolitan University (UK)</h2>
            <p className="text-gray-400 mt-2">BEng(Hons) Software Engineering (Top-up) - Completed</p>
          </div>
          <span className="text-gray-300 text-lg">2024-25</span>
        </div>  

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center border border-white">
          <div>
            <h2 className="text-2xl font-bold text-gold">Pearson College (UK)</h2>
            <p className="text-gray-400 mt-2">Pearson BTEC | Level 05 | HND in Computing</p>
            <p className="text-gray-400 mt-2">Software Engineering - Completed</p>
          </div>
          <span className="text-gray-300 text-lg">2022-23</span>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center border border-white">
          <div>
            <h2 className="text-2xl font-bold text-gold">Baduriya Central College</h2>
            <p className="text-gray-400 mt-2">GCE Advanced Level - Completed</p>
          </div>
          <span className="text-gray-300 text-lg">2020</span>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center border border-white">
          <div>
            <h2 className="text-2xl font-bold text-gold">Nooraniya Muslim Maha Vidyalaya</h2>
            <p className="text-gray-400 mt-2">GCE Ordinary Level - Completed</p>
          </div>
          <span className="text-gray-300 text-lg">2016</span>
        </div>
      </div>
    </section>
  );
}
