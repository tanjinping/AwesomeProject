import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import Route from '../utils/Route';

class UserPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <Text>UserPage</Text>
                <Button onPress={() => {
                    Route.navigate('OtherStackNavigator', {
                        screen: 'AboutPage',
                    });
                }} title="AboutPage"/>
            </SafeAreaView>
        );
    }
}

export default UserPage;
