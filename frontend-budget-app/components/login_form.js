import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native'

export default function LoginForm({handleLogin}) {
    return (
        <View style={styles.formContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.inputTitle}>Enter your username</Text>
                <TextInput
                    style={styles.inputLine}
                />              
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.inputTitle}>Enter your password</Text> 
                <TextInput
                    style={styles.inputLine}
                />
            </View>
            <TouchableOpacity style={styles.buttonStyling} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotTextContainer}>
                <Text style={styles.forgotText}>Forgot Username or password?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '40%',
        borderWidth: 1,
        borderRadius: '1%'
    },
    textContainer: {
        // backgroundColor: 'orange',
        width: '90%',
        height: '15%',
        marginBottom: 20,
        flexDirection: 'column'
    },
    inputTitle: {
        flex: 1
    },
    inputLine: {
        // backgroundColor: 'blue',
        flex: 1,
        borderBottomWidth: 1
    },
    buttonStyling: {
        backgroundColor: 'blue',
        borderWidth: 1,
        marginTop: 30,
        height: 30,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        // fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    forgotTextContainer: {
        marginTop: 30
    },
    forgotText: {
        color: 'red'
    }

})