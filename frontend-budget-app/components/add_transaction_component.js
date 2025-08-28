import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { addTransaction } from '../api/transactions';
import {Picker} from '@react-native-picker/picker';

const categories = ["bills", "groceries", "misc", "entertainment", "dining"];

export default function AddTransactionComponent({onAdd}) {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(categories[0]);
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
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              {categories.map((cat) => (
                <Picker.Item label={cat} value={cat} key={cat} />
              ))}
            </Picker>
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