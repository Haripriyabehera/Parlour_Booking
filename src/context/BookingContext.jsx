import { createContext, useContext, useState } from "react"

const BookingContext = createContext()

export default function BookingProvider({children}) {
    const [selectedDate, setSelectedDate] = useState("")

    return (
        <BookingContext.Provider value={{selectedDate, setSelectedDate}}>
            {children}
        </BookingContext.Provider>
    )
}

export function useBooking() {
    return useContext(BookingContext)
}