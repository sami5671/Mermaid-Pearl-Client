import React, { useEffect, useState } from "react";
import FeaturedRoomCard from "./featuredRoomCard";

const FeaturedRoom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://mermaid-pearl-server.vercel.app/room")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div>
      <section className="p-4 md:p-16 mx-auto mt-12 lg:mt-8 ">
        <h1 className="text-2xl lg:text-5xl text-cyan-400 font-bold text-center mb-4">
          --- Our Featured Room ------
        </h1>
        <div className="flex flex-wrap  -mx-4">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4"
            >
              <FeaturedRoomCard room={room} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedRoom;
