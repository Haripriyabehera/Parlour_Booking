import { Link, useNavigate} from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useParlour } from "../context/ParlourContext";
import { useBooking } from "../context/BookingContext";
import Calendar from "../components/Calendar";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import CartImage from "../assest/CartImage.jpeg";
// import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function Cart() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const parlourId = queryParams.get("parlourId");
  

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const {selectedParlour} = useParlour()
  const { selectedDate } = useBooking();

  const [errorMessage, setErrorMessage] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!loggedInUser) {
      setErrorMessage("You need to log in before booking.");
    }
  }, [loggedInUser]);

  // Calculate Total Price
  const totalPriceWithoutDiscount = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const totalPrice = totalPriceWithoutDiscount - discount;

  const handleCheckOut = () => {
    if (!loggedInUser) {
      setErrorMessage("⚠️ Please log in before booking.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    if (!selectedDate) {
      setErrorMessage("⚠️ Please select a date before booking.");
      return;
    }

    navigate("/checkout", {
      state: { cart, selectedDate, totalPrice },
    });
  };

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      const discountAmount = totalPriceWithoutDiscount * 0.1;
      setDiscount(discountAmount);
      alert(`Coupon applied! ₹${discountAmount.toFixed(0)} off`);
    } else {
      alert("Invalid Coupon Code");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Shopping Bag ({cart.length} Items)
      </h1>
      <Link to="/service" className="text-blue-500 cursor-pointer hover:underline">
        Back to Services
      </Link>

      {cart.length > 0 ? (
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between  bg-white shadow-md py-4"
              >
                {/* <input type="checkbox" className="mr-2" /> */}
                <img
                  src={item.image || CartImage}
                  alt={item.name}
                  className="w-16 h-16 rounded"
                />
                <div className="flex-1 ml-4">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price} / item</p>
                </div>
                <div className="flex items-center gap-1 pr-8">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 cursor-pointer rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 cursor-pointer rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                {/* <p className="text-lg font-semibold">
                  ₹{(item.price || 0) * (item.quantity || 0)}
                </p> */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="pr-4 text-1xl text-gray-800 cursor-pointer hover:text-gray-950"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="border-b pb-4 mb-4">
              <p className="flex justify-between font-medium">
                Items Total Price: <span>₹{totalPriceWithoutDiscount}</span>
              </p>
              {discount > 0 && (
                <p className="flex justify-between text-green-600">
                  Discount Applied: <span>-₹{discount.toFixed(0)}</span>
                </p>
              )}
              <p className="flex justify-between text-gray-500">
                Booking Charge: <span>FREE</span>
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Enter Coupon No."
                className="flex-1 p-2 border rounded-lg"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                onClick={applyCoupon}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Apply
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">Total: ₹{totalPrice}</h3>
            <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
            <Calendar />
            <button
              onClick={handleCheckOut}
              className="w-full px-4 py-2 mt-2 cursor-pointer text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => navigate("/service")}
              className="w-full px-4 py-2 mt-2 cursor-pointer bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Your Cart is empty</p>
      )}
    </div>
  );
}
