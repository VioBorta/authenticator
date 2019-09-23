import React, { Component } from 'react';
import { View, TextInput, Text} from 'react-native';

import { mainStyle } from '../../style';
import { CustomButton } from '../../components';
import styles from "./MobilePhoneVerificationPhone.style";

export default class MobilePhoneVerificationPage extends Component {
  render() {
    const { code, changeState, verifyCode } = this.props;
    return (
      <View>
        <View style={mainStyle.alignSelfCenter}>
          <Text style={styles.text}>Please insert the code received by SMS</Text>
        </View>
        <View style={[styles.textInput, mainStyle.mt_20]}>
          <TextInput
            placeholder="Insert the six digit code"
            value={`${code}`}
            onChangeText={changeState}
            keyboardType={'numeric'}/>
        </View>
        <View style={[mainStyle.mt_20, styles.button]}>
          <CustomButton
            title="Verify" 
            submitAction={verifyCode}
            />
        </View>
      </View>
    );
  }
}
