import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from 'react';
import { View, Image } from "react-native";

import navigationConstants from "../constants/navigationConstants";
import {
  LoginPage,
  MenuPage,
  ScanPage,
  ScanBarCodePage,
  HomePage,
  MobilePhoneVerificationPage,
  LoggedMenuPage,
  RequestConfirmationCodePage,
  RegisterPage,
} from "../pages";
import { colors } from "../style/base";
import { mainStyle } from "../style";

const AppNavigator = createStackNavigator(
  {
    [navigationConstants.LOGIN_PAGE]: LoginPage,
    [navigationConstants.MENU_PAGE]: MenuPage,
    [navigationConstants.SCAN_BAR_CODE_PAGE]: ScanBarCodePage,
    [navigationConstants.SCAN_PAGE]: ScanPage,
    [navigationConstants.HOME_PAGE]: HomePage,
    [navigationConstants.MOBILE_VERIFICATION_PHONE_PAGE]: MobilePhoneVerificationPage,
    [navigationConstants.LOGGED_PAGE]: LoggedMenuPage,
    [navigationConstants.REQUEST_CONF_CODE]: RequestConfirmationCodePage,
    [navigationConstants.REGISTER_PAGE]: RegisterPage,

  },
  {
    initialRouteName: navigationConstants.MENU_PAGE,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.navColor,
        height: 60
      },
      headerLeft: (
        <View style={mainStyle.mt_20}>
          <Image source={require('../../assets/logo1.png')}
            style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 20, marginBottom: 20}} />
        </View>
      )
    },
    navigationOptions: {
      gestureResponseDistance: { horizontal: 5000 },

    }
  }
);

export default (NavigationContainer = createAppContainer(AppNavigator));
