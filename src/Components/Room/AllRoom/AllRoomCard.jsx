import { Link } from "react-router-dom";

const AllRoomCard = ({ room }) => {
  // destructure =================================
  const {
    _id,
    name,
    description,
    price,
    availability,
    image1,
    image2,
    image3,
    image4,
    specialoffer,
  } = room;
  // =================================================================
  return (
    <>
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={image1}
          alt="Room Image"
          className="w-full h-48 object-cover object-center"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>

          <p className="text-gray-600 mb-2">
            Availability:{" "}
            <span className="text-amber-900">{availability} </span>Rooms
          </p>

          {/* <p className="text-gray-700">{description}</p> */}

          {description.length > 200 ? (
            <p className="text-gray-700">
              {description.slice(0, 200)}................
            </p>
          ) : (
            <p className="text-gray-700">{description}</p>
          )}
        </div>

        {/* "View Details" Button */}
        <div className="px-6 py-4">
          <Link to={`/roomdetails/${_id}`}>
            <button className="block w-full bg-cyan-400 font-bold text-white text-center py-2 rounded-md hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllRoomCard;
