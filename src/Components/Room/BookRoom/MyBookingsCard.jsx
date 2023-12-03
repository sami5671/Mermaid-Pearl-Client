import { Link } from "react-router-dom";

const MyBookingsCard = ({ booking, handleDelete, handleBookingConfirm }) => {
  const {
    _id,
    CustomerName,
    name,
    email,
    checkIn,
    checkOut,
    price,
    description,
    image1,
    image2,
    image3,
    image4,
    specialoffer,
    status,
  } = booking;

  //   =====================
  return (
    <div className="rounded-lg shadow-2xl gap-6 p-8 lg:flex lg:items-center lg:space-x-4">
      <div className="flex-1">
        <img
          src={image1}
          alt="Room Image"
          className="w-full h-48 rounded-lg lg:w-full"
        />
      </div>
      <div className="lg:w-2/3">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">Check-in Date: {checkIn}</p>
          <p className="text-sm text-gray-500">Check-Out Date: {checkOut}</p>
          <p className="text-sm text-gray-500">Price: ${price}/night</p>
        </div>

        {/* Update, Delete, and Confirm Buttons */}
        <div className="flex space-x-4">
          <Link to={`/updateroom/${_id}`}>
            <button className="btn bg-cyan-400 hover:bg-cyan-100 text-white">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id, checkIn)}
            className="btn bg-red-500 hover:bg-red-100 text-white"
          >
            Delete
          </button>

          {status === "confirm" ? (
            <button className="bg-green-200 text-cyan-400 px-4 py-2 rounded-lg">
              Room Confirmed
            </button>
          ) : (
            <>
              <button
                className="btn bg-green-400 text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Please Confirm
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-2xl text-center mb-4">
                    Room Summary
                  </h3>
                  <div className="room-image">
                    <img className="w-full" src={image1} alt="Room Image" />
                  </div>
                  <div className="room-details">
                    <p className="py-2">
                      <span className="font-bold">Price:</span> ${price} per
                      night
                    </p>
                    <p>
                      <span className="font-bold">Check In:</span> {checkIn}
                    </p>
                    <p>
                      <span className="font-bold">Check Out:</span> {checkOut}
                    </p>
                    <p>
                      <span className="font-bold">Room Description:</span>{" "}
                      {description}
                    </p>
                    <p>
                      <span className="font-bold">Special Offer:</span>{" "}
                      {specialoffer}
                    </p>
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        onClick={() => handleBookingConfirm(_id)}
                        className="btn"
                      >
                        Confirm Your Room
                      </button>
                      <button className="btn ml-4">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </>
          )}
        </div>
      </div>
    </div>

    // <div className="rounded-lg shadow-2xl gap-6 p-4 lg:flex lg:items-center lg:space-x-4">
    //   <div className="flex-1">
    //     <img
    //       src={image1}
    //       alt="Room Image"
    //       className="w-full h-48  rounded-lg lg:w-full"
    //     />
    //   </div>
    //   <div className="lg:w-2/3">
    //     <div className="mb-4">
    //       <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
    //       <p className="text-sm text-gray-500">Check-in Date: {checkIn}</p>
    //       <p className="text-sm text-gray-500">Check-Out Date: {checkOut}</p>
    //       <p className="text-sm text-gray-500">Price: ${price}/night</p>
    //     </div>

    //     {/* Update and Delete Buttons */}
    //     <div className="flex space-x-4">
    //       <Link to={`/updateroom/${_id}`}>
    //         <button className="bg-cyan-400 font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-200">
    //           Update
    //         </button>
    //       </Link>
    //       <button
    //         onClick={() => handleDelete(_id, checkIn)}
    //         className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-200"
    //       >
    //         Delete
    //       </button>

    //       {/* {status === "confirm" ? (
    //         <button className="bg-green-200 text-cyan-400 px-4 py-2 rounded-lg">
    //           Room Confirmed
    //         </button>
    //       ) : (
    //         <button
    //           onClick={() => handleBookingConfirm(_id)}
    //           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-300"
    //         >
    //           Please Confirm
    //         </button>
    //       )} */}

    //       {status === "confirm" ? (
    //         <button className="bg-green-200 text-cyan-400 px-4 py-2 rounded-lg">
    //           Room Confirmed
    //         </button>
    //       ) : (
    //         <>
    //           <button
    //             className="btn bg-green-500 text-white"
    //             onClick={() =>
    //               document.getElementById("my_modal_1").showModal()
    //             }
    //           >
    //             Please Confirm
    //           </button>
    //           <dialog id="my_modal_1" className="modal">
    //             <div className="modal-box">
    //               <h3 className="font-bold text-2xl text-center mb-4">
    //                 Room Summary
    //               </h3>
    //               <div className="room-image">
    //                 {/* Add your room image here */}
    //                 <img className="w-full" src={image1} alt="Room Image" />
    //               </div>
    //               <div className="room-details">
    //                 <p className="py-2">
    //                   <span className="font-bold">Price:</span> ${price} per
    //                   night
    //                 </p>
    //                 <p>
    //                   <span className="font-bold">Check In:</span> {checkIn}
    //                 </p>
    //                 <p>
    //                   <span className="font-bold">Check Out:</span> {checkOut}
    //                 </p>
    //                 <p>
    //                   <span className="font-bold">Room Description:</span>{" "}
    //                   {description}
    //                 </p>
    //                 <p>
    //                   <span className="font-bold">Special Offer:</span>{" "}
    //                   {specialoffer}
    //                   {/* Add special offer details here */}
    //                 </p>
    //               </div>

    //               <div className="modal-action">
    //                 <form method="dialog">
    //                   {/* if there is a button in the form, it will close the modal */}
    //                   <button
    //                     onClick={() => handleBookingConfirm(_id)}
    //                     className="btn"
    //                   >
    //                     Confirm Your Room
    //                   </button>
    //                   <button className="btn ml-4">Close</button>
    //                 </form>
    //               </div>
    //             </div>
    //           </dialog>
    //         </>
    //       )}

    //       {/* ============ */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default MyBookingsCard;
