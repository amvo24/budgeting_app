import { Text, View } from "react-native";
import TransactionComponent from "../components/transactions"

export default function Index() {

  return (
    <View>
      <View>
        <Text>Transactions</Text>
        <TransactionComponent />
      </View>
    </View>
  );
}
