import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const Home = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const userNameFromRedux = useSelector(({ auth }) => auth.userName);

    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <Text>This is Home Page {userNameFromRedux}</Text>
            <TextInput
                value={userName}
                onChangeText={(text) => { setUserName(text) }}
            />
            <Button
                title="Go to About"
                onPress={
                    () => {
                        // navigation.openDrawer()

                        navigation.navigate('About',
                            {
                                userName: userName,
                                rollNumber: 2643
                            })
                    }}
            />

        </View>
    )
}

export default Home;