import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateBookInfo = () => {
  const roomBooking = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    CustomerName,
    name,
    email,
    checkIn,
    checkOut,
    description,
    price,
    availability,
    image1,
    image2,
    image3,
    image4,
    specialoffer,
  } = roomBooking;
  //   const { id } = useParams();
  //   console.log(roomBooking);

  // =================================================================
  // =================================================================

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const Cname = form.Cname.value;
    const email = user?.email;
    const date1 = form.date1.value;
    const date2 = form.date2.value;

    const updatedRoomBookingInfo = {
      CustomerName: Cname,
      name,
      email,
      date1,
      date2,
      price,
      description,
      image1,
      image2,
      image3,
      image4,
      specialoffer,
    };

    console.log(updatedRoomBookingInfo);

    fetch(`https://mermaid-pearl-server.vercel.app/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRoomBookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Room Booking Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool you have updated the Room booking info!!!",
          });
        }
      });
  };

  // =================================================================

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-3xl text-center text-blue-600 mb-4">
        Room Name: {name}{" "}
        <span className="text-black">(You Can Update the Date )</span>
      </h2>
      <form
        onSubmit={handleUpdate}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="text-gray-600">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={CustomerName}
              name="Cname"
              className="input input-bordered w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="form-control">
            <label className="text-gray-600">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="form-control">
            <label className="text-gray-600">
              <span className="label-text">Check-In</span>
            </label>
            <input
              type="date"
              name="date1"
              defaultValue={checkIn}
              className="input input-bordered w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="form-control">
            <label className="text-gray-600">
              <span className="label-text">Check-Out</span>
            </label>
            <input
              type="date"
              name="date2"
              defaultValue={checkOut}
              className="input input-bordered w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* <div className="form-control">
          <label className="text-gray-600">
            <span className="label-text">Price Per Night</span>
          </label>
          <input
            type="text"
            defaultValue={"$" + price}
            readOnly
            className="input input-bordered w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div> */}
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-700 cursor-pointer"
            type="submit"
            value="Update the Cart"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateBookInfo;
