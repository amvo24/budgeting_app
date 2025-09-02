import {View, Text, SafeAreaView, Button, StyleSheet, TextInput} from 'react-native'
import {useRouter} from 'expo-router'
import LoginForm from '../components/login_form'
import { Background } from '@react-navigation/elements'

const router = useRouter()

const goToDashBoard = () => {
    router.push('/(tabs)/')
}

export default function Index() {
    return (
        <SafeAreaView style={styles.parentContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>BUDGET APP</Text>
                <LoginForm handleLogin={goToDashBoard}/>
                {/* <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Username"
                    />
                    <TextInput
                        placeholder="Password"
                    />
                    <Button title='Login' onPress={goToDashBoard} />
                </View> */}
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
        // justifyContent: 'center'
    }, 
    title: {
        fontSize: 50,
        margin: 25
    },
    // formContainer: {
    //     backgroundColor: 'red',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '70%',
    //     height: '20%',
    //     borderWidth: 1,
    //     borderRadius: '5%'
    // }
})