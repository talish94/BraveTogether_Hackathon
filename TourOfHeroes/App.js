
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

import HomeScreen from './src/Components/home';
import Users from './src/Components/users';


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
};

// const styles = StyleSheet.create({
// });

export default App;
