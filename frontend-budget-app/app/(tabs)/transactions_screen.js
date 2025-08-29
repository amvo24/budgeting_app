import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React, {useState, useEffect} from "react";
import TransactionComponent from "@/components/transactions";
import { getTransactions } from "@/api/transactions";

export default function TransactionScreen() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const setTransactions = getTransactions()
    }, transactions)

    return (
        <View>
            <Text>Transactions</Text>
            <View>
                <TransactionComponent transactions={transactions} />
            </View>
        </View>
    )
}