import { Transactions } from "../mock-data/transactions";
import { Text, View } from "react-native";

export default function TransactionComponent() {
    return (
        <View>
        {Transactions.map((tx) => (
            <View key={tx.id}>
                <Text>{tx.date} - {tx.category} - ${tx.amount}</Text>
            </View>
        ))}
        </View>
    );
}