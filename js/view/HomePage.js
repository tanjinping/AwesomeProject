import React, {Component} from 'react';
import {SafeAreaView, Text, BackHandler} from 'react-native';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress() {
        // console.log(1);
        // return true;
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
