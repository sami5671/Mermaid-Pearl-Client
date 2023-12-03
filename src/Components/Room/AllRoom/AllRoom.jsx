import { useEffect, useState } from "react";
import AllRoomCard from "./AllRoomCard";

const AllRoom = () => {
  // =================================================================
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://mermaid-pearl-server.vercel.app/room")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  // =================================================================

  return (
    <div>
      <section className="p-4 md:p-16 mx-auto mt-12 lg:mt-8">
        <h1 className="text-3xl lg:text-5xl text-cyan-400 font-bold text-center mb-8">
          --- Our Available Room Services ------
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <AllRoomCard key={room._id} room={room}></AllRoomCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllRoom;
