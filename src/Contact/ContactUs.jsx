const ContactUs = () => {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center text-cyan-400 mb-4">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address:</span> 123 Hotel Street,
              City, Country
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> info@hotel.com
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button className="bg-cyan-700 text-white py-2 px-4 rounded hover:bg-amber-900">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
