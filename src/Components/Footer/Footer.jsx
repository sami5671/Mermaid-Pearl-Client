import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section>
        <section className="bg-slate-100 flex flex-col lg:flex-row justify-center lg:mt-12 px-12 py-12 font-rancho">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-12">
            <img
              className="w-[100px] h-[100px]"
              src="https://imgur.com/8yXIXd5.jpg"
              alt=""
            />
            <h1 className="text-[#5ed0ea] font-rancho text-4xl font-bold">
              Mermaid Pearl
            </h1>
            <p className="text-center lg:text-left">
              "Feel free to connect with us anytime and become part of our
              friendly community. Share your cherished memories and moments with
              your closest companions, as we're always here to be your friends."
            </p>
            <div className="flex justify-center lg:justify-start mt-4">
              <AiFillFacebook className="text-[#5ed0ea] text-5xl lg:mr-4" />
              <AiFillTwitterCircle className="text-[#5ed0ea] text-5xl lg:mr-4" />
              <AiFillInstagram className="text-[#5ed0ea] text-5xl lg:mr-4" />
              <AiFillLinkedin className="text-[#5ed0ea] text-5xl" />
            </div>
          </div>
          <div className="lg:w-1/2 px-6 lg:pl-0 mt-8 lg:mt-0">
            <h1 className="text-[#8cd2fd] font-rancho text-4xl font-bold">
              Get in Touch
            </h1>

            <input
              type="email"
              placeholder="Email"
              className="w-full lg:w-80 mt-2"
            />
            <textarea
              placeholder="Message"
              className="w-full lg:w-80 h-24 lg:h-[120px] mt-2"
            ></textarea>
            <button className="btn btn-ghost rounded-lg text-[#5398c3] font-rancho mt-4">
              Send Message
            </button>
          </div>
        </section>
        <div className="bg-cyan-400 font-rancho text-center py-2">
          <h1 className="text-2xl text-white">
            &copy; {currentYear} Mermaid Pearl ! All Rights Reserved
          </h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
