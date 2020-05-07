import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomePage from '../view/HomePage';
import UserPage from '../view/UserPage';
import Route from '../utils/Route';

const Tab = createMaterialTopTabNavigator();

class MaterialTopTabNavigator extends Component {
    render() {
        Route.navigation = this.props.navigation;
        return (
            <Tab.Navigator tabBarPosition="bottom">
                <Tab.Screen name="HomePage" component={HomePage}/>
                <Tab.Screen name="UserPage" component={UserPage}/>
            </Tab.Navigator>
        );
    }
}

export default MaterialTopTabNavigator;
