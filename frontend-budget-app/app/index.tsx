import { Text, View } from "react-native";
import TransactionComponent from "../components/transactions"
import SummaryComponent from "../components/summary"

export default function Index() {

  return (
    <View>
      <View>
        <TransactionComponent />
        <SummaryComponent />
      </View>
    </View>
  );
}
