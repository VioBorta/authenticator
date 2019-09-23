import React, { Component } from 'react';
import { connect } from "react-redux";
import { View } from "react-native";
import * as axios from "axios";

import { mainStyle } from "../../style";
import LoggedMenuPage from './LoggedMenuPage';
import { authService } from '../../services';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';
import { storeData, removeMulti, retrieveData, removeItem, clearAsyncStorage } from '../../asyncStorage';

class LoggedMenuPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    logout = () => {
        // this.setState(INITIAL_STATE);
        // axios.defaults.headers.common['Authorization'] = undefined;
        // delete axios.defaults.headers.common['Authorization'];
        clearAsyncStorage();
        navigationService.navigateAndReset(navigationConstants.MENU_PAGE)
    }

    requestCode = () => {
        authService.getStrongConfirmCode()
            .then((resp) => {
                console.log(resp.data)
                const validatedCode = resp.data.validationCode
                const code = JSON.stringify(validatedCode)
                storeData("code", code);
                navigationService.navigate(navigationConstants.REQUEST_CONF_CODE)
            })
            .catch(error => {
                (alert(error.resp));
            })
    }

    render() {
        return (
            <View style={mainStyle.container}>
                <LoggedMenuPage
                    requestCode={this.requestCode}
                    logout={this.logout}
                />
            </View>
        );
    }
}

export default connect(
)(LoggedMenuPageContainer);
