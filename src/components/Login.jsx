import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { userAuth } from "../context/AuthContext"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {login} = userAuth()


    const handleSubmit = (e) => {
        e.preventDefault()
        const storedUsers = JSON.parse(localStorage.getItem("user") || "[]")

        const foundUser = storedUsers.find((user) => user.email === email && user.password === password)

        if(foundUser) {
            login(foundUser)
            navigate("/")
        } else {
            setError("Invalid email or password")
        }
    }

    return (
    <div className="container">    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-pink-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
    </div>
    )
}