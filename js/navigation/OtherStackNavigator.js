import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutPage from '../view/AboutPage';

const Stack = createStackNavigator();

function OtherStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AboutPage" component={AboutPage}/>
        </Stack.Navigator>
    );
}

export default OtherStackNavigator;
