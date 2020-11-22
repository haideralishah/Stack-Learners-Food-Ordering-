import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Contacts from 'expo-contacts';

const ContactComponent = ({ navigation }) => {
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync();
                if (data.length > 0) {
                    const contact = data[0];
                    console.log(data);
                }
            }
        })();
    }, []);
    return (
        <View><Text>Contact</Text></View>
    );
}

export default ContactComponent;