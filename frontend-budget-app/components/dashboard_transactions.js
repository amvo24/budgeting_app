// import { Transactions } from "../mock-data/transactions";
import { Text, View, StyleSheet } from "react-native";

export default function TransactionComponent({transactions}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recent Transactions</Text>
            <View style={styles.row}>
                <Text style={[styles.cell, styles.header, styles.right]}>Description</Text>
                <Text style={[styles.cell, styles.header, styles.left]}>Category</Text>
                <Text style={[styles.cell, styles.header, styles.center]}>Amount</Text>
            </View>
            {transactions.map((tx) => (
                <View key={tx.id} style={styles.row}>
                    <Text style={[styles.cell, styles.right]}>{tx.description}</Text>
                    <Text style={[styles.cell, styles.left]}>{tx.category}</Text>
                    <Text style={[styles.cell, styles.center]}>${tx.amount}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 15,
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        marginLeft: 15,
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",  
        paddingBottom: 10,
    },
    cell: {
        flex: 1,
        marginLeft: 15,
    },  
    header: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#555",
        paddingBottom: 5,
    },
    left: {
        textAlign: "left",
    },
    center: {
        textAlign: "left",
    },
    right: {
        textAlign: "left",
  }
})