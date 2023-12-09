# CODE LIVE SITE LINK: 
## https://mermaid-hotel.web.app/

# SignUp:
The "Register" component utilizes Firebase authentication for user registration. It employs the createUserWithEmailAndPassword method to create a new user account with the provided email and password. Upon successful registration, the user is redirected to the home page. User feedback, including error messages, is displayed using the SweetAlert library. The component is integrated with Firebase for secure user authentication and registration.
# Login: 
The "Login" component uses Firebase authentication for user login. It incorporates Firebase's signInWithEmailAndPassword method to authenticate users with their email and password. Additionally, it offers Google Sign-In functionality through Firebase's signInWithPopup method, utilizing OAuth authentication. Upon successful authentication, the component redirects the user based on the previous location or to the home page. User feedback is provided through the SweetAlert library, and user data is secured with JSON Web Tokens (JWT).

# Back-End Technology(MongoDb, ExoressJS)
The backend technology used in this application is built using Node.js with the Express framework, incorporating MongoDB as the database. Express simplifies building robust web applications and APIs in Node.js, while MongoDB serves as a NoSQL database, providing flexibility and scalability. The application features RESTful API endpoints for room and booking management, utilizing various HTTP methods such as GET, POST, PATCH, and DELETE. Middleware functions, including CORS handling, cookie parsing, and custom logging, enhance security and functionality. JSON Web Tokens (JWT) are employed for user authentication and authorization. The server communicates with the MongoDB database, storing and retrieving data related to hotel rooms, bookings, and user information. This backend technology stack ensures efficient data management, secure authentication, and seamless interaction between the client and server components.

## 1. All Room: 
The AllRoom component fetches room data from the server using React's useEffect and useState hooks, displaying available rooms dynamically in a responsive grid layout using the AllRoomCard component.

## 2. AllRoomCard: 
The AllRoomCard component receives room data as props and displays it in a styled card format. It showcases the room's name, availability, and a brief description with an option to view more details. The card features an image of the room, and a "View Details" button links to the specific room details page using React Router. The component ensures a responsive and visually appealing presentation of room information for users browsing available rooms in the application.

## 3. RoomDetails:
The RoomDetails component retrieves room data using React Router's useParams and displays detailed information about a specific room. It showcases a carousel of images, room description, price per night, room size, availability, and any special offers. The user can navigate through images with pagination buttons and has the option to book the room by clicking the "Book Now" button, which redirects to the booking page for the selected room.

## 4. BookRoom:
The BookRoom component displays details of a room and allows users to add it to their cart. It retrieves room information using React Router's useLoaderData and leverages context from AuthContext to fetch the current user's email and display name. The form collects user details, check-in, and check-out dates, and upon submission, sends a POST request to add the room to the user's cart, providing a seamless booking experience with a confirmation message using SweetAlert.

## 5. MyBookings:
The MyBookings component fetches and displays user-specific bookings from the server. It uses the user's email from the AuthContext and communicates with the backend using Axios. The component provides functionality to cancel bookings, considering a one-day cancellation policy, and to confirm bookings. It utilizes the SweetAlert2 library for user-friendly confirmation and informational messages. The displayed bookings are rendered using the MyBookingsCard component, which includes options for cancellation and confirmation.

## 6. MyBookingsCard: 

The MyBookings component fetches and displays user-specific bookings. It uses the user's email from the AuthContext to retrieve bookings from the server, allowing users to view, cancel (within a one-day policy), and confirm their room bookings. Booking details are presented using the MyBookingsCard component, which includes options for cancellation and confirmation.

## 7. UpdateBookInfo:
The UpdateBookInfo component allows users to modify their room booking information. It retrieves the current booking details using useLoaderData and updates the server with new information upon submission. The form includes fields for the customer's name, email, and updated check-in and check-out dates. Successful updates trigger a confirmation alert using SweetAlert2.








