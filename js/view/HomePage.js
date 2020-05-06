import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <Text>HomePage</Text>
            </SafeAreaView>
        );
    }
}

export default HomePage;
