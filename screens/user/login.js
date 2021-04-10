import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const Login = () => {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    input: {
        height: '40@vs',
        width: '200@s',
        margin: '12@ms',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: "18@ms",
        paddingLeft:'6@ms'
        
    }
});

export default Login;