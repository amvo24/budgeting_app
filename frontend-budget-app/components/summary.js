import {View, Text, StyleSheet} from "react-native"
import { Summary } from "../mock-data/summary"

export default function SummaryComponent() {
    return (
        <View style={styles.container}>
            {Summary.map((sum) => (
                <View key={sum.id}>
                    <Text>{sum.category} - ${sum.amount}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue"
    }
})