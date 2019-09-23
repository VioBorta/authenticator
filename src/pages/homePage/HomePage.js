import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { mainStyle } from '../../style';
import { CustomButton } from '../../components';
import styles from "./HomePage.style";

export default class HomePage extends Component {
  render() {
    const { phone, changeState, getPhone } = this.props;
    return (
      <View style={mainStyle.container}>
        {/* <Text> Hello, User </Text> */}
        <View style={[styles.textInput, mainStyle.mt_20]}>    
              <TextInput
            placeholder="Insert your phone number"
            valur={phone}
            onChangeText={changeState} />
        </View>
        <View style={[styles.button, mainStyle.mt_20]}>
          <CustomButton
            title="Continue"
            submitAction={getPhone}
          />
          {/* <Text>Logout</Text> */}
        </View>
      </View>
    );
  }
}
