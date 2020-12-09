import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useSelector } from 'react-redux';

import Home from './components/home';
import Inbox from './components/inbox';

import Camera from './components/camera';
import Signup from './components/signup';
import Contact from './components/contact';
import About from './components/about';
import Signin from './components/signin';
import ChatBox from './components/chatBox';

import store from './Store/index';
import StylingPage from './components/stylingpage';
import * as firebase from 'firebase';
import { fetchUserInfo } from './Store/action/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDMMCPYd6DIsl_YRBPfXrgExlhpd6avqZM",
  authDomain: "testing-2b480.firebaseapp.com",
  databaseURL: "https://testing-2b480.firebaseio.com",
  projectId: "testing-2b480",
  storageBucket: "testing-2b480.appspot.com",
  messagingSenderId: "467025782581",
  appId: "1:467025782581:web:21f526a0102d9584784e7c",
  measurementId: "G-3GFBX03X1Z"
};

firebase.initializeApp(firebaseConfig);




const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Stack;

// export default function App() {


//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((auth) => {
//       if (auth) {
//         console.log(auth, 'on auth state change ');
//       }
//     })
//   }, []);
//   return (

//     <Provider store={store}>

//       <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name='Signup' component={Signup} />
//           <Drawer.Screen name='Signin' component={Signin} />


//           {/* <Drawer.Screen name='Contact' component={Contact} />
//           <Drawer.Screen name='Camera' component={Camera} /> 



//            <Drawer.Screen name='Home' component={Home} />
//           <Drawer.Screen name='About' component={About} />
//           <Drawer.Screen name='StylingPage' component={StylingPage} /> */}
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }
























// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-home'
//                 : 'ios-home';
//             } else if (route.name === 'About') {
//               iconName = focused ? 'ios-airplane' : 'ios-airplane';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name='Home' component={Home} />
//         <Tab.Screen name='About' component={About} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

































function AppContainer() {
  const authenticatedUser = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        console.log(auth, 'on auth state change ');
        console.log(authenticatedUser, 'authenticatedUser')
        fetchUserInfo(auth.uid);
      }
    })
  }, []);


  return (
    <NavigationContainer>
      {
        (authenticatedUser) ?
          < Navigator >
            <Screen name='Inbox' component={Inbox} />
            <Screen name='ChatBox' component={ChatBox} />
          </Navigator>
          :
          < Navigator >
            <Screen name='Signup' component={Signup} />
            <Screen name='Signin' component={Signin} />
          </Navigator>
      }
    </NavigationContainer >
  )
}




export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}































// export default function App() {
//   const [students, setStudents] = useState([
//     'haider', 'Ali', 'Aslam', 'hassan',
//     'haider', 'Ali', 'Aslam', 'hassan',
//     'haider', 'Ali', 'Aslam', 'hassan',
//     'haider', 'Ali', 'Aslam', 'hassan',
//     'haider', 'Ali', 'Aslam', 'hassan'
//   ])


//   const alertMsg = () => {
//     alert('Hello RN')
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         style={{ width: 200, height: 200 }}
//         source={require('./assets/favicon.png')} />


//       <TouchableOpacity onPress={alertMsg}>
//         <Text style={styles.firstHeading}>
//           Hello React Native 1
//         </Text>
//       </TouchableOpacity>
//       <Text style={styles.firstHeading}>
//         Hello React Native 2
//         </Text>
//       <Text style={styles.firstHeading}>
//         Hello React Native 3
//         </Text>
//       <TextInput
//         onChangeText={(a) => { alert(a) }}

//       />




//       <ScrollView>
//         {
//           students.map((studentName, index) => (
//             <View key={studentName + index}>
//               <Text style={styles.firstHeading}>{studentName}</Text>
//             </View>
//           ))
//         }
//       </ScrollView>











//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   firstHeading: {
//     color: 'blue',
//     backgroundColor: 'green',
//     fontSize: 32
//   }
// });
