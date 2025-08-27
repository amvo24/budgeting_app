import {View, Text, StyleSheet} from "react-native"
import { Summary } from "../mock-data/summary"

export default function SummaryComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Budget Progress</Text>
            {Summary.map((sum) => (
                <View key={sum.id} style={styles.row}>
                    <Text>{sum.category} - ${sum.amount}</Text>
                </View>
            ))}
        </View>
    )
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
        marginLeft: 15,
        marginRight: 15,
        //Styling for divider line
        borderBottomWidth: 1,
        borderBottomColor: "#eee",  
        paddingBottom: 10,
        // backgroundColor: "red"
    },
})