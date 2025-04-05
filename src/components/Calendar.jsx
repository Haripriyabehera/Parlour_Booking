import { useState } from "react"
import { useBooking } from "../context/BookingContext"

export default function Calendar({onSelectDate}) {
    const {selectedDate, setSelectedDate} = useBooking()
    const [isOpen, setIsOpen] = useState(false)
  
    const getNextDays = (daysCount) => {
        const today = new Date()
        let dateArr = []

        for(let i=0; i <= daysCount; i++) {
            let nextDate = new Date()
            nextDate.setDate(today.getDate() + i)

            if(i===0) {
                dateArr.push({label: "Today", value: nextDate})
            }else if (i=== 1){
                dateArr.push({label: "Tomorrow", value: nextDate})
            } else {
                dateArr.push({
                    label: nextDate.toLocaleDateString("en-us",{
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                    }),
                    value: nextDate,
                })
            }
        }
        return dateArr.slice(0, 5)
    }

    const dates = getNextDays(5)

    return (
        <div className="relative w-64">
      {/* Dropdown Button */}
      <input
          type="text"
          readOnly
          value={selectedDate ? selectedDate : "Choose Your Day"}
          onClick={() => setIsOpen(!isOpen)}
           className="w-full px-4 py-2 text-left border rounded-lg bg-white cursor-pointer"
      />
      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {dates.map((date, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedDate(date.label);
                setIsOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {date.label}
            </div>
          ))}
        </div>
      )}
    </div>
    )
}