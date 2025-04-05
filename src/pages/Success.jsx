// import { useLocation, useNavigate } from "react-router-dom";
// import { PiCheckCircleFill } from "react-icons/pi";

// export default function Success() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { bookingId, selectedDate, totalPrice } = location.state || {};

//   return (
//     <div className="max-w-xl mx-auto mt-16 bg-white p-6 rounded-lg shadow-md text-center">
//       <PiCheckCircleFill className="text-green-500 text-6xl mx-auto mb-4" />
//       <h1 className="text-3xl font-bold text-green-600 mb-2">Booking Successful!</h1>
//       <p className="text-gray-700 mb-4">Thank you for your booking. Here are your details:</p>

//       <div className="text-left mb-6">
//         <p className="text-md"><strong>Booking ID:</strong> {bookingId || "N/A"}</p>
//         <p className="text-md"><strong>Selected Date:</strong> {selectedDate || "Not provided"}</p>
//         <p className="text-md"><strong>Total Price:</strong> ₹{totalPrice || 0}</p>
//       </div>

//       <button
//         onClick={() => navigate("/")}
//         className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         Go to Home
//       </button>
//     </div>
//   );
// }
