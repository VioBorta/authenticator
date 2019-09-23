import React, { Component } from 'react';
import { connect } from "react-redux";
import { View } from "react-native";

import RequestConfirmationCodePage from './RequestConfirmationCodePage';
import { mainStyle } from '../../style';
import { retrieveData } from '../../asyncStorage';


class RequestConfirmationCodePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''

        }
    }
    componentDidMount = () => {
        retrieveData("code").then(resp => {
            this.setState({ code: resp })
        })
    }


    render() {
        return (
            <View style={mainStyle.flex1}>
                <RequestConfirmationCodePage
                    code={this.state.code} />
            </View>
        );
    }
}

export default connect(
    null, null
)(RequestConfirmationCodePageContainer);
