import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000/api/token/'

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
            email,
            password,
        })
        return response.data
        
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);

    }
}