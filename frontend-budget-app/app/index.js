import {View, Text, SafeAreaView, Button} from 'react-native'
import {useRouter} from 'expo-router'

const router = useRouter()

const goToDashBoard = () => {
    router.push('/(tabs)/')
}

export default function Index() {
    return (
        <SafeAreaView>
            <View>
            <Text>LOGIN PAGE</Text>
            </View>
            <Button title='Login' onPress={goToDashBoard} />
        </SafeAreaView>
    )
}