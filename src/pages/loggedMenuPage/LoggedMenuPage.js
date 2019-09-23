import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '../../components';
import { mainStyle } from '../../style';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';
import { Button } from 'react-native-elements';
import styles from "./LoggedMenuPage.style";

export default class LoggedMenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { requestCode ,logout} = this.props;
        return (
            <View style={mainStyle.flex1}>
                <View style={mainStyle.alignSelfCenter}>
                </View>
                <View style={[mainStyle.alignSelfCenter,  styles.button]}>
                    <View style={[mainStyle.mt_20]}>
                       <CustomButton
                       title="Two Step Verification"
                       submitAction={() => navigationService.navigate(navigationConstants.SCAN_BAR_CODE_PAGE)}
                       customStyle={styles.twoFactorbtn}
                       />
                    </View>
                    <View style={styles.marginTop}>
                    <CustomButton
                            title="Request confirmation code"
                            submitAction={requestCode}
                            customStyle={styles.requestCodeBtn}
                        />
                    </View>
                    <View style={[mainStyle.mt_20]}>
                        <CustomButton
                            title="Logout"
                            submitAction={logout}
                            customStyle={styles.logoutBtn}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
