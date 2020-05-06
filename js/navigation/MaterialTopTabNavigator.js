import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomePage from '../view/HomePage';
import UserPage from '../view/UserPage';

const Tab = createMaterialTopTabNavigator();

function MaterialTopTabNavigator() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="HomePage" component={HomePage}/>
            <Tab.Screen name="UserPage" component={UserPage}/>
        </Tab.Navigator>
    );
}

export default MaterialTopTabNavigator;
