import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import TransactionComponent from "../../components/dashboard_transactions"
import SummaryComponent from "../../components/summary"
import AddTransactionComponent from "../../components/add_transaction_component"
import { getTransactions } from "@/api/transactions";

export default function Index() {

  // This stuff is due to typescript
  type Transaction = {
    description: string;
    date: string;
    category: string;
    amount: number;
    notes?: string;
    paid_by?: string;
  };

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // hits backend for transactions in DB when component mounts DOM
  useEffect(() => {
    const handleGet = async () => {
      const response = await getTransactions()
      setTransactions(response)
    }
    // console.log("THIS IS RESPONSE: ", response)
    handleGet()
  }, [])

  // updates transaction state when child component form creates a new transaction
  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <SafeAreaView>
    <View>
      <View>
        <Text style={styles.title}>Dashboard</Text>
        <TransactionComponent transactions={transactions} />
        <SummaryComponent />
        <AddTransactionComponent onAdd={handleAddTransaction} />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
  }
})
