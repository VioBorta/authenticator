import React, { Component } from 'react';
import { View, WebView } from 'react-native';

import { mainStyle } from '../../style';

export default class RegisterPage extends Component {
    render() {
        return (
            <View style={mainStyle.containerCenter}>

                <WebView
                    useWebKit={true}
                    source={{ uri: 'https://register.cbim.it/register' }} 
                    />

            </View>
        );
    }
}
