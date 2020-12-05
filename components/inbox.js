import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecepient } from '../Store/action/chat'
const Inbox = ({ navigation }) => {

    const dispatch = useDispatch();
    const authenticatedUser = useSelector(({ auth }) => auth.user);
    const recipients = useSelector(({ chat }) => chat.recipients);
    useEffect(() => {
        dispatch(fetchAllRecepient(authenticatedUser.uid));
    }, [])

    useEffect(() => {
        console.log(authenticatedUser.uid, 'authenticatedUser.uid', recipients);
    })
    return (
        <View style={{ flex: 1 }}>
            <Text>Inbox Page</Text>
            {
                (recipients && recipients.length > 0) ? (
                    recipients.map((recipient) => (
                        <View key={recipient.id} style={{borderWidth: 3,}}>
                            <Text
                                style={{
                                    color: 'green',
                                    fontSize: 20
                                }}
                            >{recipient.email}</Text>
                        </View>
                    ))


                ) : null
            }


        </View>
    )
}

export default Inbox;