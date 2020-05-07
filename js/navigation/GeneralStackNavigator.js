/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import OtherStackNavigator from './OtherStackNavigator';
import reducer from '../redux/reducers';
import middleware from '../redux/middleware';

const Stack = createStackNavigator();
export const Store = createStore(reducer, middleware);

const GeneralStackNavigator: () => React$Node = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MaterialTopTabNavigator" component={MaterialTopTabNavigator}/>
                    <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator}/>
                    <Stack.Screen name="OtherStackNavigator" component={OtherStackNavigator}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default GeneralStackNavigator;
