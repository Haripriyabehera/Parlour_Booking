import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Profile from "./components/Profile"
import ParlourList from "./pages/ParlourList"
import ServiceList from "./pages/ServiceList"
import Cart from "./pages/Cart"
import CheckOut from "./pages/Checkout"
import CartProvider from "./context/CartContext"
import BookingProvider from "./context/BookingContext"
import { ParlourProvider } from "./context/ParlourContext"
import { AuthProvider } from "./context/AuthContext"
import './App.css'


function App() {
  
  return (
      <Router>
        <AuthProvider>
        <ParlourProvider>
        <BookingProvider>
          <CartProvider>
          <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/profile" element={<Profile />}></Route>
             <Route path="/parlour" element={<ParlourList />}></Route>
             <Route path="/service" element={<ServiceList />}></Route>
             <Route path="/cart" element={<Cart />}></Route>
             <Route path="/checkout" element={<CheckOut />}></Route>
             <Route path="/signup" element={<SignUp />}></Route>
             <Route path="/login" element={<Login />}></Route>
           </Routes>
          </CartProvider>
         </BookingProvider>
         </ParlourProvider>
         </AuthProvider>
       </Router>
   
  )
}

export default App
