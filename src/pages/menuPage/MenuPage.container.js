import React, { Component } from 'react';
import { connect } from "react-redux";
import { View } from "react-native";

import MenuPage from "./MenuPage";
import { mainStyle } from "../../style";
import { retrieveData, removeMulti, multiGet } from '../../asyncStorage';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


class MenuPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount = () => {

        retrieveData('token').then((resp) => {
            console.log(resp)
        })
    }

    render() {
        return (
            <View style={mainStyle.container}>
                <MenuPage
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps
)(MenuPageContainer);
