import React, { Component } from 'react';
import { View, TextInput, Text, Linking, WebView, Switch } from 'react-native';
import { CheckBox } from 'react-native-elements'

import { mainStyle } from '../../style';
import styles from "./LoginPage.style";
import { CustomButton } from '../../components';
import { colors } from '../../style/base';
import { Button } from 'react-native-elements';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';

export default class LoginPage extends Component {
  render() {
    const { changeState, username, password, login, checked, check } = this.props;
    return (
      <View style={mainStyle.containerCenter}>
        <View style={mainStyle.alignSelfCenter}>
          <Text style={styles.loginText}> LOG IN</Text>
        </View>
        <View style={mainStyle.alignSelfCenter}>

          <Text style={styles.text}>with your credentials</Text>
        </View>
        <View style={[styles.textInput, mainStyle.mt_20]}>
          <TextInput
            placeholder="Username"
            onChangeText={(value) => changeState("username", value)}
            placeholderTextColor={colors.lightGray}
            value={username}
            style={styles.textInputStyle}
          />
        </View>
        <View style={[styles.textInput, mainStyle.mt_20]}>
          <TextInput
            placeholder="Password"
            onChangeText={(value) => changeState("psw", value)}
            value={password}
            secureTextEntry={true}
            placeholderTextColor={colors.lightGray}
            style={styles.textInputStyle}
          />
        </View>
        <View style={[mainStyle.mt_20, styles.button]}>
          <Button
            title="SIGN IN"
            buttonStyle={styles.buttonStyle}
            onPress={login}
            titleStyle={[{ fontSize: 25, fontFamily: 'Titillium-Bold' }]}
          />
        </View>
        <View style={[mainStyle.mt_20, mainStyle.row, styles.checkBoxView]}>
          <Switch
            value={checked}
            onValueChange={(value) => check(value)} />
          <Text style={styles.saveCredentialsText}>Save Credentials</Text>
        </View>
        <View style={[mainStyle.alignSelfCenter, mainStyle.mt_20]}>
          <Text style={styles.text}>Do not have an account?</Text>
          <View style={styles.border}>
            <Text onPress={() => { navigationService.navigate(navigationConstants.REGISTER_PAGE) }} style={[styles.text, styles.textColor]}>Click here to create one.</Text>
          </View>
        </View>
      </View>
    );
  }
}
