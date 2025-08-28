import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import TransactionComponent from "../components/transactions"
import SummaryComponent from "../components/summary"
import AddTransactionComponent from "../components/add_transaction_component"

export default function Index() {

  return (
    <SafeAreaView>
    <View>
      <View>
        <Text style={styles.title}>Budget App</Text>
        <TransactionComponent />
        <SummaryComponent />
        <AddTransactionComponent />
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
