import img1 from "../assets/images/manager1.jpeg";
import img2 from "../assets/images/manager3.jpeg";
import img3 from "../assets/images/manager1.jpeg";

const About = () => {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center text-cyan-400 mb-4">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our hotel, where your comfort and satisfaction are our top
          priorities. Founded in [Year], we have a rich history of providing
          exceptional service and creating memorable experiences for our guests.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to [Mission Statement]. We are committed to providing a
          welcoming and luxurious environment that makes you feel at home,
          whether you're traveling for business or leisure.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          At our hotel, we value [Core Values], and our dedicated team of
          professionals works tirelessly to ensure your stay is enjoyable. Meet
          our management team below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={img1}
              alt="Manager 1"
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">General Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={img2}
              alt="Manager 2"
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={img3}
              alt="Manager 3"
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
            <p className="text-gray-600">Hospitality Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
