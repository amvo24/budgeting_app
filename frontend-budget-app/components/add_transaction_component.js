import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Transactions } from '../mock-data/transactions';

export default function AddTransactionComponent() {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [notes, setNotes] = useState(''); 

    const handleSubmit = () => {

        const newTransaction = {
            id: Transactions.length + 1, // Backend will handle this once integrated
            date,
            category,
            amount: parseFloat(amount),
            notes,
        };
        
        onAdd(newTransaction); // send new transaction to parent component

        // Reset form fields
        setDate('');
        setCategory('');
        setAmount('');
        setNotes('');
    }

  return (
    <View style={styles.container}>
      <Text>Add Transaction</Text>
        <View>
            <TextInput
              placeholder="Date"
              value={date}
              onChangeText={setDate}
            />
        </View>
        <View>
            <TextInput
              placeholder="category"
              value={category}
              onChangeText={setCategory}
            />
        </View>
        <View>
            <TextInput
              placeholder="amount"
              value={amount}
              onChangeText={setAmount}
            />
        </View>
        <View>
            <TextInput
              placeholder="notes"
              value={notes}
              onChangeText={setNotes}
            />
        </View>

        <Button title="Submit" onPress={handleSubmit} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green"
  }
});