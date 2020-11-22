import React from 'react';
import { View, Text } from 'react-native';

const About = ({ navigation, route }) => {
    // const { userName, rollNumber } = route.params;
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <Text style={{ color: 'white' }}>
                This is About Page
                {/* {userName} {rollNumber} */}
            </Text>
        </View>
    )
}

export default About;