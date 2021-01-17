import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDishes, addDishToCart } from '../Store/action/food';
import * as firebase from 'firebase';

const Checkout = ({ navigation, route }) => {

    const [grandTotal, setGrandTotal] = useState(0);

    const cart = useSelector(({ food }) => food.cart);
    useEffect(() => {
        console.log(' cart ****************', cart);
        calculateGrandTotal();
    }, [])

    const calculateGrandTotal = () => {
        let grandTotal = 0;
        cart.map((cartItem) => {
            grandTotal = grandTotal + cartItem.totalPrice;
        })
        setGrandTotal(grandTotal)
    }

    return (
        <ScrollView style={{ flex: 1 }}>

            {
                cart && cart.length > 0 ?

                    cart.map((dishItem, index) => {
                        return (
                            <View key={dishItem.dishName + index}>
                                <Image source={{ uri: dishItem.imageURL }} style={{ width: 50, height: 50 }} />
                                <Text>{dishItem.dishName}</Text>
                                <Text>{dishItem.price}</Text>
                                <Text>{dishItem.quantity}</Text>
                                <Text>{dishItem.totalPrice}</Text>
                            </View>
                        )
                    }) : null
            }
            <Text>{grandTotal}</Text>

            <Button
                onPress={() => {
                    navigation.navigate('DeliveryDetails');
                }}
                title="Go to Delivery Details"
                color="#841584"
            />
        </ScrollView>
    )
}

export default Checkout;