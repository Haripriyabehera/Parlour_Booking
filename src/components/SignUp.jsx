import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { userAuth } from "../context/AuthContext"

export default function SignUp() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [showPassword, setShowPassword] = useState(flase)
   const [error, setError] = useState("")
   const [success, setSuccess] = useState("")
   const navigate = useNavigate()
   const {login} = userAuth()

    const handleSubmit= (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
          setError("⚠️ All fields are required.");
          return;
        }
        if (!email.includes("@")) {
          setError("⚠️ Please enter a valid email.");
          return;
        }
        if (password.length < 6) {
          setError("⚠️ Password must be at least 6 characters.");
          return;
        }
        const formData = {
          
            name,
            email,
            password
        }
        console.log(formData)

        const storedUsers = JSON.parse(localStorage.getItem("user") || "[]")

        if(storedUsers.find((user) => user.email === formData.email)) {
            setError("⚠️ User already exist. Try logging in.")
            return
        }

        storedUsers.push(formData)
        localStorage.setItem("user", JSON.stringify(storedUsers))
        setSuccess("✅ Account created successfully!")

        setTimeout(() => {
          login(formData)
          navigate("/")
        }, 1000)
        navigate("/")
     
    }


    return (
        <div className="container">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-pink-500 mt-1"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-pink-500 hover:underline">
            Login
          </a>
        </p>
      </div>
        </div>
        </div>
    )
}