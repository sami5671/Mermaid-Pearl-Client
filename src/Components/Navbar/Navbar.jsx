import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";
import userPicture from "../../assets/images/userlogo.png";

const Navbar = () => {
  // destructing
  const { user, logout } = useContext(AuthContext);
  // ==========================For Logging out =================================================
  const handleLogout = () => {
    logout()
      .then(() => {
        swal({
          text: "Successfully Registered",
        });
      })
      .catch((error) => {
        console.error(error);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  // =================================================================
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/myBookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>

      {user ? (
        <>
          <div className="flex items-center mr-2">
            <div>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-6 lg:w-10 rounded-full">
                  <img src={user.photoURL || userPicture} alt="" />
                </div>
              </label>
            </div>
            <div className="hidden lg:block">
              <span>{user.displayName || user.email}</span>
            </div>
          </div>
          <button onClick={handleLogout} className="btn btn-ghost bg-cyan-100">
            LOG OUT
          </button>
        </>
      ) : (
        <Link to="/login">
          <button className="btn font-bold">LOGIN HERE</button>
        </Link>
      )}
    </>
  );
  //   =================================================================
  return (
    <section className="">
      <div className="drawer relative">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img
                className="w-[50px] lg:w-[90px] rounded-lg"
                src="https://imgur.com/8yXIXd5.jpg"
                alt=""
              />
              <p className="text-cyan-300	font-bold lg:text-2xl">
                Mermaid Hotel
              </p>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side fixed top-0 bottom-0 right-0">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-50 min-h-full bg-cyan-500	 text-white">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
