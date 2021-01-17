import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDishes, addDishToCart } from '../Store/action/food';
import * as firebase from 'firebase';


const Foodlisting = ({ navigation, route }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllDishes())
    }, [])
    const dishes = useSelector(({ food }) => food.dishes);
    const cart = useSelector(({ food }) => food.cart);
    useEffect(() => {
        console.log(dishes, ' dishes ****************', cart);
    })

    const addToCart = (dishItem) => {
        dispatch(addDishToCart(dishItem))
    }

    return (
        <ScrollView style={{ flex: 1 }}>

            {
                cart && cart.length > 0 ?
                    <Button
                        onPress={() => {
                            // let currentUser = firebase.auth().currentUser;
                            navigation.navigate('Checkout');

                            // if (currentUser) {
                            //     console.log('user is authenticated.');
                            //     navigation.navigate('Checkout');

                            // }
                            // else {
                            //     console.log('user is not authenticated.');
                            //     navigation.navigate('Signin');

                            // }
                        }}
                        title="Checkout"
                        color="#841584"
                    />
                    : null
            }

            {
                dishes && dishes.length > 0 ?

                    dishes.map((dishItem, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { addToCart(dishItem) }}
                                key={dishItem.dishName + index}>
                                <View >
                                    <Image source={{ uri: dishItem.imageURL }} style={{ width: 400, height: 300 }} />
                                    <Text>{dishItem.dishName}</Text>
                                    <Text>{dishItem.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })

                    : null
            }


        </ScrollView>
    )
}

export default Foodlisting;