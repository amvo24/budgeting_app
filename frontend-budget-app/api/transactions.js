import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/transactions';

// Get all Transactions
export const getTransactions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/`);
        return response.data
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return [];
}}

// Get a Transction by ID
export const getTransactionByID = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching transactions by Id:", error)
        return []
    }
}

// Create a Transaction
export const addTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_BASE_URL}transactions/`, transaction);
        return response.data;
    } catch (error) {
        console.error("Error adding transaction:", error);
        throw error;
    }
}

// Delete a transaction
export const deleteTransaction = async () => {
    try {
        const repsonse = await axios.delete(`${API_BASE_URL}/${id}`)
        return repsonse.data
    } catch (error) {
        console.error("Error deleting Transaction", error)
        throw error
    }
}

