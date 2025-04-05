import axios from 'axios'

const API_URL = "http://localhost:3000/api";

export const fetchServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/servies`)
        return response.data;
    }
    catch (error){
        console.error("Error fetching services:", error);
        return []
    }
}

export const bookAppoinment = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/bookings`, bookingData)
        return response.data
    }
    catch (error){
        console.error("Error booking appoinmnet:", error)
        return null
    }
}