import { Slot } from 'expo-router'
import { SafeAreaView, Text } from 'react-native'

const _layout = () => {
    return (
        <SafeAreaView>
            <Text>Auth _layout</Text>
            <Slot />
        </SafeAreaView>
    )
}

export default _layout