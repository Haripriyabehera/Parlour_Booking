import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()


export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"))
        if(storedUser) {
            setUser(storedUser)
        }
    }, [])

    const login = (userData) => {
        localStorage.setItem("loggedInUser", JSON.stringify(userData))
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem("loggedInUser")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const userAuth = () => useContext(AuthContext)