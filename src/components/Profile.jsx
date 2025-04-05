import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
        if(!loggedInUser) {
            navigate("/")
        } else {
            setUser(loggedInUser)
        }
    }, [navigate])

    return (
        <div>
            <h1>User profile</h1>
            {user ? (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    )
}