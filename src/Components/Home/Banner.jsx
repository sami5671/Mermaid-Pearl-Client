import homePageVideo from "../../assets/RESORT.mp4";

const Banner = () => {
  return (
    <div className="relative top-0 left-0 z-[-1]">
      <video className="w-full object-cover" autoPlay muted loop>
        <source src={homePageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
      <div className="absolute top-[20px] lg:top-[120px] lg:w-2/3 px-12 text-white z-10">
        <marquee className="lg:text-6xl font-bold mb-4">
          Welcome to Mermaid Pearl Hotel
        </marquee>
        <p className="text-[6px] lg:text-xl">
          "Welcome to Mermaid Pearl Hotel, where luxury meets tranquility.
          Nestled in the heart of paradise, our resort offers a breathtaking
          escape with pristine beaches, elegant accommodations, and world-class
          amenities. Immerse yourself in the serene ambiance, savor exquisite
          cuisine, and rejuvenate in our spa oasis. Whether you seek a romantic
          getaway, a family adventure, or a corporate retreat, our warm
          hospitality and stunning surroundings make us the perfect choice.
          Experience the allure of Mermaid Pearl Hotel and create lasting
          memories in a haven of comfort and opulence. Your dream vacation
          awaits at our seaside sanctuary."
        </p>
      </div>
    </div>
  );
};

export default Banner;
