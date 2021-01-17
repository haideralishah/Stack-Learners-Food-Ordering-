import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { fetchRestaurantDishes } from '../Store/action/food';
import { useDispatch, useSelector } from 'react-redux';


const Foodmenus = ({ navigation, route }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRestaurantDishes())
    }, [])

    const dishes = useSelector(({ food }) => food.dishes);
    useEffect(() => {
        console.log(dishes, ' dishes ****************')
    })

    return (
        <View style={{ flex: 1 }}>
            <Button
                onPress={() => {
                    navigation.navigate('AddNewDish');
                }}
                title="Add New Dish"
                color="#841584"
            />

            {
                dishes && dishes.length > 0 ?

                    dishes.map((dishItem, index) => {
                        return (
                            <View key={dishItem.dishName + index}>
                                <Image source={{ uri: dishItem.imageURL }} style={{ width: 400, height: 300 }} />

                            </View>
                        )
                    })

                    : null
            }


        </View>
    )
}

export default Foodmenus;