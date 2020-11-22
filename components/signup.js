import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../Store/action/auth';

const Signup = ({ navigation }) => {
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
                    dispatch(signupUser({ email, password }));
                }}
                title="Register Here"
                color="#841584"
            />

        </View>
    )
}

export default Signup;