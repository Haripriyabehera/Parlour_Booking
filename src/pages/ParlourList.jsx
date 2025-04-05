import { useNavigate } from "react-router-dom"
// import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
// import { useEffect } from "react";
import { useParlour } from "../context/ParlourContext"
import ParlourImage from "../assest/ParlourImage.jpeg"


const parlours = [
  {
    "id": 1,
    "name": "Glamour Salon",
    "location": "MG Nagar",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Style Studio",
    "location": "BTM layot",
    "rating": 4.8
  },
  {
    "id": 3,
    "name": "Glow Beauty Hub",
    "location": "Marthali",
    "rating": 4.3
  },
  {
    "id": 4,
    "name": "Glamour Salon",
    "location": "MG Nagar",
    "rating": 4.5
  },
  {
    "id": 5,
    "name": "Style Studio",
    "location": "BTM layot",
    "rating": 4.8
  },
  {
    "id": 6,
    "name": "Glow Beauty Hub",
    "location": "Marthali",
    "rating": 4.3
  }
]



export default function ParlourList() {
  const navigate = useNavigate()
  const {setSelectedParlour} = useParlour()

  const handleClick = (parlour) => {
    // navigate(`/service?parlourId=${id}&parlourName=${encodeURIComponent(name)}&parlourLocation=${encodeURIComponent(location)}`)
    setSelectedParlour(parlour)
    navigate("/service")

  }

    return (
      <div className="container">
        
      <div className="p-8 mx-15 grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {parlours.map((parlour) => (
        <div 
          key={parlour.id} 
          className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105"
          // onClick={() => handleClick(parlour.id, parlour.name, parlour.location)}
          onClick={() => handleClick(parlour)}
        >
          <img
              src={ParlourImage}
              alt={parlour.name}
              className="w-90 h-45 object-cover rounded-lg mb-3"
            />
          <h2 className="text-xl font-semibold text-gray-800">{parlour.name}</h2>
          <p className="text-gray-600">{parlour.location}</p>
          <p className="text-gray-500">⭐ {parlour.rating}</p>
        </div>
      ))}
      </div>
    </div>
    )
}