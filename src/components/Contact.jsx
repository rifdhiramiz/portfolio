export default function Contact() {
  // handle Web3Forms submission
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // add your Web3Forms access key
    formData.append("access_key", "7769eadd-de41-47ea-894d-790b8655bc43");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message Sent to Email!");
      event.target.reset();
    } else {
      alert("❌ Failed to send email.");
    }
  };

  return (
    <section
      id="contact"
      className="px-8 py-16 bg-darkblue"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gold mb-6">
        Contact Me
      </h1>
      <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>
      <p className="mb-10 text-center text-gray-400 text-2xl mr-150">
        Let's connect! Fill out the form below 👇
      </p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4 border border-white text-white"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-100">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg border-white focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg border-white focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg border-white focus:ring-1 focus:ring-gold focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-start p-8 rounded-2xl text-white space-y-6 text-left">
          {/* Email */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope text-xl" style={{ color: 'var(--color-dark2-blue)' }}></i>
              <span className="font-bold text-lg gold">Email</span>
            </div>
            <p className="mt-1 text-gray-400">rifdhiramiz18@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone text-xl" style={{ color: 'var(--color-dark2-blue)' }}></i>
              <span className="font-bold text-lg gold">Phone</span>
            </div>
            <p className="mt-1 text-gray-400">+94 76 247 3449</p>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-xl" style={{ color: 'var(--color-dark2-blue)' }}></i>
              <span className="font-bold text-lg gold">Location</span>
            </div>
            <p className="mt-1 text-gray-400">Mawanella, Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
