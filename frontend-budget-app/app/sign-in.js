import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import {useRouter, usePathname} from 'expo-router'
import { useEffect } from 'react'
import LoginForm from '../components/login_form'
import { useAuth } from '../context/auth_context'



export default function LoginScreen() {

    return (
        <SafeAreaView style={styles.parentContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>BUDGET APP</Text>
                <LoginForm />
                <TouchableOpacity style={styles.createTextContainer}>
                    <Text style={styles.createText}>Create Account</Text>
                 </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        alignItems: 'center',
    }, 
    title: {
        fontSize: 50,
        margin: 25
    },
    createTextContainer: {
        marginTop: 20
    },
    createText: {
        color: 'red'
    }

})