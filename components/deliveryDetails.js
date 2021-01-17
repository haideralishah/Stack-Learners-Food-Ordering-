import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrderNow } from '../Store/action/food';
import * as firebase from 'firebase';

const DeliveryDetails = ({ navigation, route }) => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const dispatch = useDispatch();

    const cart = useSelector(({ food }) => food.cart);

    const placeOrder = () => {
        let deliveryDetails = { userName, phoneNumber, deliveryAddress, cart };
        console.log(deliveryDetails, 'deliveryDetails');
        dispatch(placeOrderNow(deliveryDetails));
    }
    return (
        <View>
            <View>
                <Text>User Name: </Text>
                <TextInput value={userName} onChangeText={(text) => { setUserName(text) }} />
            </View>
            <View>
                <Text>Phone Number: </Text>
                <TextInput value={phoneNumber} onChangeText={(text) => { setPhoneNumber(text) }} />
            </View>
            <View>
                <Text>Delivery Address: </Text>
                <TextInput value={deliveryAddress} onChangeText={(text) => { setDeliveryAddress(text) }} />
            </View>

            <Button
                onPress={() => {
                    // navigation.navigate('DeliveryDetails');
                    placeOrder();
                }}
                title="Place Order"
                color="#841584"
            />
        </View>
    )

}

export default DeliveryDetails;