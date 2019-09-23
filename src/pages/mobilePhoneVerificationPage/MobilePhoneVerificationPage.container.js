import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, KeyboardAvoidingView } from "react-native";

import { mainStyle } from "../../style";
import MobilePhoneVerificationPage from './MobilePhoneVerificationPage';
import { authService } from '../../services';
import { storeData } from '../../asyncStorage';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';

const mapStateToProps = ({ reducer }) => ({
  userData: reducer
});

class MobilePhoneVerificationPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      error: false
    }
    this.verifyCode = this.verifyCode.bind( this );
  }

  changeState = (code) => {
    this.setState({ code: code });
  };

  verifyCode = async() => {

    if(this.state.code > 99999 && this.state.code <= 999999 ){
      try{
        await authService.checkPhoneCode(this.state.code)
        .then(resp => {
            storeData('confirmedCode', this.state.code)
            navigationService.navigateAndReset(navigationConstants.LOGGED_PAGE);
          });
      }catch(error){
        console.log(error);
        alert("The code you inserted is not valid");
      }    
    }
    else{
      alert("The code you inserted is not valid");
      return false;
    }

  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={mainStyle.container}>
        <MobilePhoneVerificationPage
          code={this.state.code}
          changeState={this.changeState}
          verifyCode={this.verifyCode}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect(
  mapStateToProps
)(MobilePhoneVerificationPageContainer);
