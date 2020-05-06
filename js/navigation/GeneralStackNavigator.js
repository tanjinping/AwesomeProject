/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import OtherStackNavigator from './OtherStackNavigator';

const Stack = createStackNavigator();

const GeneralStackNavigator: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MaterialTopTabNavigator" component={MaterialTopTabNavigator}/>
                <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator}/>
                <Stack.Screen name="OtherStackNavigator" component={OtherStackNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default GeneralStackNavigator;
