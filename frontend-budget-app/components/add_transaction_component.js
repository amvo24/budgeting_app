import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
// import { Transactions } from '../mock-data/transactions';
import { addTransaction } from '../api/transactions';

export default function AddTransactionComponent({onAdd}) {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState(''); 

  const handleSubmit = async () => {

    const newTransaction = {
        description,
        date,
        category,
        amount: parseFloat(amount),
        notes,
        paid_by: "User"
    };

    // awaits for backend to save transaction
    const savedTransaction = await addTransaction(newTransaction);
      
    onAdd(savedTransaction); // send new transaction to parent component

    // Reset form fields
    // setDescription('');
    // setDate('');
    // setCategory('');
    // setAmount('');
    // setNotes('');
  }

  return (
    <View style={styles.container}>
      <Text>Add Transaction</Text>
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="Date"
              value={date}
              onChangeText={setDate}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="category"
              value={category}
              onChangeText={setCategory}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="amount"
              value={amount}
              onChangeText={setAmount}
            />
        </View>
        <View style={styles.inputContainer}>
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
  },
  inputContainer: {
    marginBottom: 10,
    backgroundColor: "white"
  }
});