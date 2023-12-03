import React from "react";

const FeaturedRoomCard = ({ room }) => {
  const { image2 } = room;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-4">
      <img
        src={image2}
        alt="Featured Room"
        className="w-full h-64 object-cover object-center"
      />
    </div>
  );
};

export default FeaturedRoomCard;
