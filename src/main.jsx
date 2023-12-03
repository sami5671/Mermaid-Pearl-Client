import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Login from "./Components/Providers/Login";
import Register from "./Components/Providers/Register";
import AuthProvider from "./Components/Providers/AuthProvider";
import AllRoom from "./Components/Room/AllRoom/AllRoom";
import RoomDetails from "./Components/Room/AllRoom/RoomDetails";
import PrivateRoute from "./Components/Providers/PrivateRoute";
import BookRoom from "./Components/Room/BookRoom/BookRoom";
import MyBookings from "./Components/Room/BookRoom/MyBookings";
import UpdateBookInfo from "./Components/Room/BookRoom/UpdateBookInfo";
import About from "./About/About";
import ContactUs from "./Contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/roomdetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mermaid-pearl-server.vercel.app/roomdetails/${params.id}`
          ),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <BookRoom></BookRoom>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://mermaid-pearl-server.vercel.app/book/${params.id}`),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateroom/:id",
        element: (
          <PrivateRoute>
            <UpdateBookInfo></UpdateBookInfo>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mermaid-pearl-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <AllRoom></AllRoom>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
