import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBookingsCard from "./MyBookingsCard";
import axios from "axios";
import moment from "moment/moment";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mermaid-pearl-server.vercel.app/bookings?email=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setBookings(res.data);
      });
  }, []);
  // ===========================================

  // =================================================================
  const handleDelete = (id, checkIn) => {
    const today = moment();
    const bookingDateMoment = moment(checkIn);

    // check the days difference
    const daysDifference = bookingDateMoment.diff(today, "days");

    if (daysDifference >= 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://mermaid-pearl-server.vercel.app/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining = bookings.filter(
                  (booking) => booking._id !== id
                );
                setBookings(remaining);
              }
            });
        }
      });
    } else {
      Swal.fire(
        "You can only cancel a booking before 1 day from the booking day."
      );
    }
  };

  // =================================================================

  const handleBookingConfirm = (id) => {
    fetch(`https://mermaid-pearl-server.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  // =================================================================
  return (
    <section>
      <div>
        {bookings.map((booking) => (
          <MyBookingsCard
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleBookingConfirm={handleBookingConfirm}
          ></MyBookingsCard>
        ))}
      </div>
    </section>
  );
};

export default MyBookings;

// fetch(`https://mermaid-pearl-server.vercel.app/bookings?email=${user.email}`)
//   .then((res) => res.json())
//   .then((data) => setBookings(data));

// =================================================================
// const handleDelete = (id, bookingDate) => {
//   const today = moment();
//   const bookingDateMoment = moment(bookingDate);

//   // check the days difference
//   const daysDifference = bookingDateMoment.diff(today, "days");

//   if (daysDifference >= 1) {
//     const proceed = confirm("Are you sure you want to delete?");
//     if (proceed) {
//       fetch(`https://mermaid-pearl-server.vercel.app/bookings/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.deletedCount > 0) {
//             alert("Booking deleted successfully");
//             const remaining = bookings.filter(
//               (booking) => booking._id !== id
//             );
//             setBookings(remaining);
//           }
//         });
//     }
//   } else {
//     alert("You can only cancel a booking before 1 day from the booking day.");
//   }
// };
