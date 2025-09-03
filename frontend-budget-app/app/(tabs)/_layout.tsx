import { Tabs, Redirect } from "expo-router";
import React from "react";
import { useAuth } from "@/context/auth_context";

export default function TabLayout() {
    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) {
        return <Redirect href="/sign-in"/>
    }
    return (
        <Tabs>
            <Tabs.Protected guard={isAuthenticated}>
            <Tabs.Screen 
            name="index"
            options={{
                title: "Dashboard",
                headerShown: false,
            }}
            />
            <Tabs.Screen 
            name="transactions_screen"
            options={{
                title: "Transactions",
                headerShown: false,
            }}
            />
            <Tabs.Screen 
            name="profile"
            options={{
                title: "Profile",
                headerShown: false,
            }}
            />
        </Tabs.Protected>
        </Tabs>
    )
}