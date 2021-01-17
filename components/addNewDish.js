import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { addNewDish } from '../Store/action/food';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

const AddNewDish = ({ navigation, route }) => {
    const [dishName, setdishName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    
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
                <Text>Dish Name: </Text>
                <TextInput value={dishName} onChangeText={(dishName) => { setdishName(dishName) }} />
            </View>
            <View style={{ border: '1px solid black' }}>
                <Text>Price: </Text>
                <TextInput value={price} onChangeText={(price) => { setPrice(price) }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick food picture" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>


            <Button
                onPress={() => {
                    dispatch(addNewDish({ dishName, price, imageUri: image }));
                }}
                title="Add Dish"
                color="#841584"
            />

        </View>
    )
}

export default AddNewDish;