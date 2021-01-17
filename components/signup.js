import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../Store/action/auth';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-gesture-handler';

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [restaurantName, setRestaurantNameText] = useState('');
    const [delTime, setDelTimeText] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const { navigate } = navigation;

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

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

            <View style={{ border: '1px solid black' }}>
                <Text>Restaurant Name: </Text>
                <TextInput value={restaurantName} onChangeText={(restaurantNameText) => { setRestaurantNameText(restaurantNameText) }} />
            </View>

            <View style={{ border: '1px solid black' }}>
                <Text>Delivery Timings: </Text>
                <TextInput value={delTime} onChangeText={(delTimeText) => { setDelTimeText(delTimeText) }} />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>

            <Button
                onPress={() => {
                    console.log(email, password)
                    dispatch(signupUser({ email, password, restaurantName, deliveryTime: delTime, role: "restaurant", imageUri: image }));
                }}
                title="Register Here"
                color="#841584"
            />
            <Button onPress={() => {
                navigation.navigate('Signin')
            }}
                title='Already have an account? login here.'
                color="#841584"
            />

        </View>
    )
}

export default Signup;