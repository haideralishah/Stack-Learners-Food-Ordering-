import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const StylingPage = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const userNameFromRedux = useSelector(({ auth }) => auth.userName);

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow', }}>1</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow' }}>2</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow' }}>3</Text>
                </View>
            </View>



            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow', }}>1</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow' }}>2</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow' }}>3</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow', }}>1</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow' }}>2</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow' }}>3</Text>
                </View>
            </View>





            {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, backgroundColor: 'brown', color: 'yellow' }}>4</Text>
                <Text style={{ flex: 1, backgroundColor: 'purple', color: 'yellow' }}>5</Text>
                <Text style={{ flex: 1, backgroundColor: 'grey', color: 'yellow' }}>6</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, backgroundColor: 'blue', color: 'yellow' }}>7</Text>
                <Text style={{ flex: 1, backgroundColor: 'pink', color: 'yellow' }}>8</Text>
                <Text style={{ flex: 1, backgroundColor: 'black', color: 'yellow' }}>9</Text>
            </View> */}

















            {/* <Text style={{ width: 100, height: 100, backgroundColor: 'red', color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text>
            <Text style={{ width: 100, height: 100, backgroundColor: 'blue', color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text>
            <Text style={{ width: 100, height: 100, backgroundColor: 'green', color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text> */}


            {/* <Text style={{ backgroundColor: 'red', flex: 1, color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text>
            <Text style={{ backgroundColor: 'blue', flex: 2, color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text>
            <Text style={{ backgroundColor: 'green', flex: 3, color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text> */}
            {/* <Text style={{ backgroundColor: 'red', flex: 1, color: 'yellow' }}>This is Home Page {userNameFromRedux}</Text> */}
        </View>
    )
}

export default StylingPage;