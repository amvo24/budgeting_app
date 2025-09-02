import {View, StyleSheet, SafeAreaView, Button, TextInput} from 'react-native'

export default function LoginForm({handleLogin}) {
    return (
        <View style={styles.formContainer}>
            <TextInput
                placeholder="Username"
            />
            <TextInput
                placeholder="Password"
            />
            <Button title='Login' onPress={handleLogin} />

        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'red'
    },
    formContainer: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '40%',
        borderWidth: 1,
        borderRadius: '1%'
    },
    
})