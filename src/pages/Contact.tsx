function Contact(){
  return (
    <section className="min-h-screen min-w-screen bg-black text-white py-16 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-purple-400">Get In Touch</h2>

      <form
        action="https://formspree.io/f/meezdzeo" 
        method="POST"
        className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-black px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
