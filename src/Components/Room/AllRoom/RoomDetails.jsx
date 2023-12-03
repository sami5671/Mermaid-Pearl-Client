import { Link, useLoaderData, useParams } from "react-router-dom";

const RoomDetails = () => {
  const allRooms = useLoaderData();
  const { id } = useParams();
  //   const idInt = parseInt(id);

  console.log(allRooms);
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-cyan-400 text-center text-3xl font-bold py-4">
          {allRooms.name}
        </h1>
      </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={allRooms.image1} className="w-full lg:h-[400px]" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={allRooms.image2} className="w-full lg:h-[400px]" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={allRooms.image3} className="w-full lg:h-[400px]" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={allRooms.image4} className="w-full lg:h-[400px]" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      {/* details */}

      <section className="px-4 mt-4">
        <div>
          <h1>
            <span className="text-cyan-400 text-2xl">
              Room Description: <br />
            </span>
            {allRooms.description}
          </h1>
          <p>
            <span className="text-cyan-400 text-2xl">Price per Night: </span>
            <span className="font-bold text-2xl text-amber-500">
              ${allRooms.price}
            </span>
          </p>
          <p>
            <span className="text-cyan-400 text-2xl">Room Size: </span>
            <span className=" text-xl">11 feet x 12 feet</span>
          </p>
          <p>
            <span className="text-cyan-400 text-2xl">Availability: </span>
            <span className=" text-xl">{allRooms.availability}</span>
          </p>
          <p>
            <span className="text-cyan-400 text-2xl">Special Offers: </span>
            <span className="text-[18px] text-amber-500">
              {allRooms.specialoffer}
            </span>
          </p>
          <div className="py-4">
            <Link to={`/book/${id}`}>
              <button className="block w-full bg-cyan-400 font-bold text-white text-center py-2 rounded-md hover:bg-blue-600">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RoomDetails;
