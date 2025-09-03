import { createContext, useContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { loginUser } from "../api/auth"
import { router } from "expo-router"

// Here we create the context
const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState([])
    const [accessToken, setAccessToken] = useState([])

    const login = async(email, password) => {
        try {
            const {access, refresh } = await loginUser(email, password)
            await AsyncStorage.setItem("accessToken", access)
            await AsyncStorage.setItem("refreshToken", refresh)
            setAccessToken(access)
            setUser(email)
            setIsAuthenticated(true)
            router.replace('/(tabs)/')
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
        <AuthContext.Provider 
            value={{
                accessToken, 
                user, 
                login, 
                logout,
                isAuthenticated
            }}>
            {children}
        </AuthContext.Provider>
    )
}

// Here we are using the context we created up top
export function useAuth() {
    return useContext(AuthContext)
}