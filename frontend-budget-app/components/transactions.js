import { Transactions } from "../mock-data/transactions";
import { Text, View, StyleSheet } from "react-native";

export default function TransactionComponent() {
    return (
        <View style={styles.container}>
        <Text>Transactions</Text>
        {Transactions.map((tx) => (
            <View key={tx.id}>
                <Text>{tx.date} - {tx.category} - ${tx.amount}</Text>
            </View>
        ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    }
})