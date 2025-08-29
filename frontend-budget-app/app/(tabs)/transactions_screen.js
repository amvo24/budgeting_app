import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React, {useState, useEffect} from "react";
// import TransactionComponent from "@/components/dashboard_transactions";
import TransactionCard from "@/components/transactions_card"
import { getTransactions } from "@/api/transactions";

export default function TransactionScreen() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const handleGet = async () => {
            const response = await getTransactions()
            setTransactions(response)
        }
        handleGet()
    }, [])

    return (
        <SafeAreaView>
            <Text style={styles.title}>Transactions</Text>
            {/* <View>
                <TransactionComponent transactions={transactions} />
            </View> */}
            {transactions.map((tx) => (
                <TransactionCard key={tx.id} transaction={tx} />
            ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
  }
})