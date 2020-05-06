import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterPage from '../view/RegisterPage';
import LoginPage from '../view/LoginPage';

const Stack = createStackNavigator();

function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RegisterPage" component={RegisterPage}/>
            <Stack.Screen name="LoginPage" component={LoginPage}/>
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;
