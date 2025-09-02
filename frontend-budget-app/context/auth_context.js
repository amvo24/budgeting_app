import { createContext, useContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { loginUser } from "../api/auth"

// Here we create the context
const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState([])
    const [accessToken, setAccessToken] = useState([])

    const login = async(email, password) => {
        try {
            const {access, refresh } = await loginUser(email, password)
            await AsyncStorage.setItem("accessToken", access)
            await AsyncStorage.setItem("refreshToken", refresh)
            setAccessToken(access)
            setUser(email)
        } catch (error) {
            throw new Error("Invalid login")
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem("accessToken")
        await AsyncStorage.removeItem("refreshToken")
        setAccessToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{accessToken, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// Here we are using the context we created up top
export function useAuth() {
    return useContext(AuthContext)
}