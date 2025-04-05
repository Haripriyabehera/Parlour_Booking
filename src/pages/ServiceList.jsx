import { useEffect, useState } from "react";
import { useParlour } from "../context/ParlourContext";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import ServiceImage from "../assest/ServiceImage.jpeg";
import ServiceBanner1 from "../assest/serviceBanner1.jpg";
import ServiceBanner2 from "../assest/serviceBanner2.jpg";
import ServiceBanner3 from "../assest/serviceBanner3.jpg";

const images = [ServiceBanner1, ServiceBanner2, ServiceBanner3];

const allServiceList = [
  {
    id: 1,
    parlourId: 1,
    name: "Haircut",
    category: "Hair Services",
    price: 500,
    duration: "30 min",
  },
  {
    id: 2,
    parlourId: 1,
    name: "Hair Spa",
    category: "Hair Services",
    price: 1200,
    duration: "60 min",
  },
  {
    id: 3,
    parlourId: 1,
    name: "Haircut",
    category: "Hair Services",
    price: 500,
    duration: "30 min",
  },
  {
    id: 4,
    parlourId: 1,
    name: "Hair Spa",
    category: "Hair Services",
    price: 1200,
    duration: "60 min",
  },
  {
    id: 5,
    parlourId: 1,
    name: "Hair Coloring",
    category: "Hair Services",
    price: 2500,
    duration: "90 min",
  },
  {
    id: 6,
    parlourId: 2,
    name: "Manicure",
    category: "Nail Services",
    price: 700,
    duration: "45 min",
  },
  {
    id: 7,
    parlourId: 2,
    name: "Pedicure",
    category: "Nail Services",
    price: 800,
    duration: "45 min",
  },
  {
    id: 8,
    parlourId: 2,
    name: "Haircut",
    category: "Hair Services",
    price: 700,
    duration: "30 min",
  },
  {
    id: 9,
    parlourId: 3,
    name: "Bridal Makeup",
    category: "Makeup",
    price: 8000,
    duration: "120 min",
  },
  {
    id: 10,
    parlourId: 3,
    name: "Party Makeup",
    category: "Makeup",
    price: 3500,
    duration: "90 min",
  },
  {
    id: 11,
    parlourId: 3,
    name: "Manicure",
    category: "Nail Services",
    price: 500,
    duration: "40 min",
  },
  {
    id: 12,
    parlourId: 1,
    name: "Haircut",
    category: "Hair Services",
    price: 500,
    duration: "30 min",
  },
  {
    id: 13,
    parlourId: 1,
    name: "Hair Spa",
    category: "Hair Services",
    price: 1200,
    duration: "60 min",
  },
  {
    id: 14,
    parlourId: 1,
    name: "Hair Coloring",
    category: "Hair Services",
    price: 2500,
    duration: "90 min",
  },
  {
    id: 15,
    parlourId: 2,
    name: "Manicure",
    category: "Nail Services",
    price: 700,
    duration: "45 min",
  },
  {
    id: 16,
    parlourId: 2,
    name: "Pedicure",
    category: "Nail Services",
    price: 800,
    duration: "45 min",
  },
  {
    id: 17,
    parlourId: 2,
    name: "Haircut",
    category: "Hair Services",
    price: 700,
    duration: "30 min",
  },
  {
    id: 18,
    parlourId: 3,
    name: "Bridal Makeup",
    category: "Makeup",
    price: 8000,
    duration: "120 min",
  },
  {
    id: 19,
    parlourId: 3,
    name: "Party Makeup",
    category: "Makeup",
    price: 3500,
    duration: "90 min",
  },
  {
    id: 20,
    parlourId: 3,
    name: "Manicure",
    category: "Nail Services",
    price: 500,
    duration: "40 min",
  },
];

export default function ServiceList() {
  const { selectedParlour } = useParlour();
  const [filteredServices, setFilteredServices] = useState([]);
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  useEffect(() => {
    const filtered = allServiceList.filter(
      (service) => service.parlourId === selectedParlour.id
    );
    setFilteredServices(filtered);
  }, [selectedParlour]);

  // Handle Add to Cart with login check
  const handleAddToCart = (service) => {
    addToCart(service);
  };

  // Get quantity of service in cart
  const getQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="w-full max-w-[calc(100%-200px)] mx-auto p-5">
      {/* Header Section */}
      <div className="sticky top-0 z-50 w-full bg-white">
        <div className="flex justify-between  items-center mx-8">
          <div>
            <h1 className="text-3xl font-bold">{selectedParlour?.name}</h1>
            <p className="text-gray-600">{selectedParlour?.location}</p>
          </div>
          <Link
            to="/cart"
            className="relative mr-10 inline-block cursor-pointer text-gray-800 hover:text-gray-600"
          >
            <AiOutlineShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-2 ml-6">
        <Link to="/" className="text-2xl">
          <GoArrowLeft />
        </Link>
      </div>

      {/* Image Gallery */}

      <div className="grid grid-cols-3 w-full p-4  m-2">
        <div className="col-span-2">
          <img
            src={images[0]}
            alt="Service Banner"
            className="w-full h-full object-cover p-2"
          />
        </div>
        <div className="flex flex-col p-2 gap-2 h-full">
          {images.slice(1, 3).map((img, index) => (
            <div className="flex-1" key={index}>
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 uppercase tracking-wide">
          Our Services
        </h1>
        <div className="w-20 h-1 bg-pink-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Service List */}
      <div className="w-full  max-w-[calc(100%-100px)] ml-4 grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="p-4 rounded-xl shadow-md bg-white">
            <img
              src={ServiceImage}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="text-gray-600">Category: {service.category}</p>
            <p className="text-gray-800 font-semibold">
              Price: ₹{service.price}
            </p>

            {getQuantity(service.id) === 0 ? (
              <button
                onClick={() => handleAddToCart(service)}
                className="w-full bg-pink-400 text-white py-2 rounded-lg cursor-pointer hover:bg-pink-600 mt-4"
              >
                Add To Cart
              </button>
            ) : (
              <div className="flex items-center mt-4 space-x-10">
                <div className="flex items-center rounded-lg gap-1 bg-gray-100 shadow-sm">
                  <button
                    onClick={() => decreaseQuantity(service.id)}
                    className="px-3 bg-gray-200 cursor-pointer rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg">{getQuantity(service.id)}</span>
                  <button
                    onClick={() => increaseQuantity(service.id)}
                    className="px-3 bg-gray-200 cursor-pointer  rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(service.id)}
                  className="px-6 py-1 bg-pink-400 text-white cursor-pointer rounded-lg hover:bg-pink-500"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
