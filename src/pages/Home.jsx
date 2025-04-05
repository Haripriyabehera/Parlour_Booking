import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import ParlourList from "./ParlourList";
import { AiOutlineLogout } from "react-icons/ai";
// import LandingImage from "../assest/LandingImage.avif"

export default function Home() {
  const {user, logout} = userAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="container">
      <nav className="p-4  bg-pink-400 shadow-md">
                  <div className="conatainer pl-15 mx-auto flex justify-between items-center">
                      <h1 className="text-gray-800 text-xl font-bold">BookNBeautify</h1>
                      <div>
                        {user ? (
                          <button 
                          onClick={handleLogout}
                          className="bg-white text-pink-400 p-2 cursor-pointer rounded-md hover:bg-pink-100 transition flex items-center gap-2"
                        >
                          <AiOutlineLogout size={18} />
                          {/* <span className="hidden sm:inline">Logout</span> */}
                        </button>

                        ) : (
                          <Link to="/login" className="bg-white text-pink-400 px-4 py-2 rounded-md">Login</Link>
                        )}
                         
                      </div>
                  </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-10 px-4">
        {/* <img src={LandingImage} alt="Landing page" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" /> */}
        <h2 className="text-3xl font-bold text-gray-800">Book Your Beauty Session Now!</h2>
        <p className="text-gray-600 mt-2">Choose from a variety of services including haircuts, manicures, pedicures, and more.</p>
        {/* <div className="mt-4">
          <Link to="/services" className="bg-pink-500 text-white px-6 py-3 rounded-md">Explore Services</Link>
        </div> */}
      </div>

      {/* Parlour List section */}
      <div className="mt-10">
        <ParlourList />
      </div>
    </div>  
  
  );
}