import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { mainStyle } from '../../style';
import styles from './RequestConfirmationCodePage.style'

export default class RequestConfirmationCodePage extends Component {
    render() {
        const { code } = this.props;
        return (
            <View>
                <View style={mainStyle.mt_20}>
                    <View style={mainStyle.mt_20}>
                        <Text style={styles.text}>The code you requested is:</Text>
                    </View>
                    <View style={mainStyle.mt_20}>
                        <Text style={styles.codeText}>{code}</Text>
                    </View>
                </View>

            </View>
        );
    }
}
