import React from "react";
import img1 from "../../assets/images/handmap.jpeg";
import img2 from "../../assets/images/map.png";

const Map = () => {
  return (
    <section className="container mx-auto py-24">
      <h1 className="text-center text-cyan-400 lg:text-5xl font-bold mb-6">
        -------Find Us On------
      </h1>
      <div className="flex gap-4">
        <div className="w-full lg:w-[500px]">
          <img src={img1} alt="Hand Map" className="w-full max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <img src={img2} alt="Map" className="w-full max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Map;
