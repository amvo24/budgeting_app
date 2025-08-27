import { Text, View } from "react-native";
import TransactionComponent from "../components/transactions"
import SummaryComponent from "../components/summary"
import AddTransactionComponent from "../components/add_transaction_component"

export default function Index() {

  return (
    <View>
      <View>
        <Text>Budget App</Text>
        <TransactionComponent />
        <SummaryComponent />
        <AddTransactionComponent />
      </View>
    </View>
  );
}
