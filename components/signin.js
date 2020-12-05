import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signin } from '../Store/action/auth';
import { useSelector, useDispatch } from 'react-redux';

const Signin = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>

            <View style={{ border: '1px solid black' }}>
                <Text>Email: </Text>
                <TextInput value={email} onChangeText={(email) => { setEmail(email) }} />
            </View>
            <View style={{ border: '1px solid black' }}>
                <Text>Password: </Text>
                <TextInput secureTextEntry={true} value={password} onChangeText={(password) => { setPassword(password) }} />
            </View>

            <Button
                onPress={() => {
                    console.log(email, password)
                    dispatch(signin({ email, password }));
                }}
                title="Login"
                color="#841584"
            />

        </View>
    )
}

export default Signin;