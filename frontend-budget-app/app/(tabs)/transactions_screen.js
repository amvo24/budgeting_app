import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, {useState, useEffect, useCallback} from "react";
import { useFocusEffect } from "expo-router";
import TransactionComponent from "@/components/dashboard_transactions";
import TransactionCard from "@/components/transactions_card"
import { getTransactions } from "@/api/transactions";

export default function TransactionScreen() {

    const [transactions, setTransactions] = useState([])

    useFocusEffect(
      useCallback(() => {
        const handleGet = async () => {
            const response = await getTransactions()
            setTransactions(response)
        }

        handleGet()

      }, [])
    
    )

    return (
        <SafeAreaView>
            <Text style={styles.title}>Transactions</Text>
            <View style={styles.divider}></View>
            <View style={styles.search}>
                <Text>SEARCH BAR WILL GO HERE</Text>
            </View>
            <View style={styles.divider}></View>
            <ScrollView>
            {transactions.map((tx) => (
                <TransactionCard key={tx.id} transaction={tx} />
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    },
  divider: {
    height: 1,          
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 10, 
  },
  search: {
    height: '5%',
    // width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  }
})