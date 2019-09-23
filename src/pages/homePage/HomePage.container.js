import React, { Component } from 'react';
import { connect } from "react-redux";
import { View } from "react-native";

import { mainStyle } from "../../style";
import HomePage from './HomePage';
import { authService } from '../../services';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';
import { storeData } from '../../asyncStorage';


const mapStateToProps = state => {
  return {
      auth: state.auth
  }
}


class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ""

    }
  }

  changeState = (phone) => {
    this.setState({ phone: phone });
  };

  getPhone = () => {
    authService.phoneVerification(this.state.phone)
      .then((resp) => {
        console.log(resp.data)
        const uuid = resp.data.uuid;
        storeData("uuid", uuid);
        navigationService.navigate(navigationConstants.CONFIMR_PHONE_CODE);
      })
      .catch(error => {
        (alert(error.resp));
      })
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <HomePage
          userData={this.props.userData}
          phone={this.state.phone}
          changeState={this.changeState}
          getPhone={this.getPhone}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(HomePageContainer);
