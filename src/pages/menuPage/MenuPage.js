import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { CustomButton } from '../../components';
import { mainStyle } from '../../style';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';
import styles from './MenuPage.style';
export default class MenuPage extends Component {
  render() {
    return (
      <View style={mainStyle.container}>
        <View style={[mainStyle.alignSelfCenter, styles.button]}>
          <View>
            <View style={[mainStyle.mt_20]}>
              <CustomButton
                title="Two Step Verification"
                submitAction={() => navigationService.navigate(navigationConstants.SCAN_BAR_CODE_PAGE)}
                customStyle={styles.btn}
              />
            </View>
            <View style={[mainStyle.mt_20]}>
              <CustomButton
                title="LOGIN"
                submitAction={() => navigationService.navigate(navigationConstants.LOGIN_PAGE)}
                customStyle={styles.btn}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
