import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, selectedDate, totalPrice } = location.state || {};
  const [showPopup, setShowPopup] = useState(false);

  const handleProceed = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <div className="relative min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Service Summary</h1>

        {/* Order Items List */}
        <div className="bg-gray-100 p-4 rounded-lg">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div key={`${item.id}-${item.name}`} className="flex justify-between border-b py-3">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">₹{item.price} x {item.quantity}</p>
                </div>
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in your order</p>
          )}
        </div>

        {/* Booking Date */}
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Selected Date</h2>
          <p className="text-gray-700">{selectedDate ? selectedDate : "No date selected"}</p>
        </div>

        {/* Order Summary */}
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Total Amount</h2>
          <p className="text-gray-800 text-lg font-semibold">₹{totalPrice}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="px-6 py-2 bg-gray-300 cursor-pointer rounded-lg hover:bg-gray-400"
          >
            Back to Cart
          </button>
          <button
            onClick={handleProceed}
            className="px-6 py-2 cursor-pointer bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
  {showPopup && (
    <motion.div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl text-center w-[500px] max-w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Booking Confirmed 🎉</h2>
        <p className="text-gray-700 mb-2 text-lg">
          <strong>Date:</strong> {selectedDate}
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          <strong>Total Price:</strong> ₹{totalPrice}
        </p>
        <button
          onClick={handleClosePopup}
          className="mt-4 px-6 py-3 bg-pink-500 text-white cursor-pointer rounded-lg hover:bg-pink-600 transition"
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
