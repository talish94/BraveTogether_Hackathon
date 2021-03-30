
import React from 'react';
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import HomeScreen from './src/Components/home';
import Users from './src/Components/users';

// Reading data from Firebase
const fetchDataFromFirebase = ( userId ) =>
  database()
    .ref(`/users/${ userId }`)
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
    });

// Add user to Firebase
const addUserToFirebase = ( userId ) =>
  database()
    .ref('/users/')
    .update({
      userId: {
        "paths": {}
    }})
    .then(() => console.log(`User: ${userId} as been created. `));

// Updating data to Firebase
const addPathToFirebase = ( userId, index, lat, long, story ) =>
  database()
    .ref(`/users/${userId}/paths/`)
    .update({
      index: {
        "lat": lat,
        "long": long,
        "story": story
      }
    })
    .then(() => console.log(`Path of: ${userId} as been created. `));

// Remove user from Firebase
const removeUserFromFirebase = ( userId ) =>
database()
  .ref(`/users/${userId}`)
  .remove()
  .then(console.log(`user: ${userId} removed .`));

const Tab = createMaterialBottomTabNavigator();


const App = () => {

    return (
        <>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                            <EntypoIcon name="map" size={25} color="#4F8EF7" />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Users"
                        component={Users}
                        options={{
                            tabBarLabel: 'Users',
                            tabBarIcon: ({ color }) => (
                            <FeatherIcon name="users" size={25} color="#4F8EF7" />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
>>>>>>> main
};

// const styles = StyleSheet.create({
// });

export default App;
