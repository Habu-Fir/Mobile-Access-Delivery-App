import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Button title='SIGN UP' onPress={() => router.push("/sign-up")} />
        </View>
    )
}

export default SignUp