import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return (
        <Tabs>
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
        </Tabs>
    )
}