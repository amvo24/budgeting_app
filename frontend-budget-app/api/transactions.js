import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';

export const getTransactions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}transactions/`);
        return response.data
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return [];
    }}

export const addTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_BASE_URL}transactions/`, transaction);
        return response.data;
    } catch (error) {
        console.error("Error adding transaction:", error);
        throw error;
    }
}