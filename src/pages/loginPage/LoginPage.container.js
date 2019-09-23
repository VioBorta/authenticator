import React, { Component } from 'react';
import { connect } from "react-redux";
import { View } from "react-native";

import LoginPage from "./LoginPage";
import { mainStyle } from "../../style";
import actionTypes from '../../constants/actionTypes';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';
import { storeData, retrieveData, removeItem } from '../../asyncStorage';
import { authService } from '../../services';
import { instance } from '../../services/config';

const mapDispatchToProps = dispatch => ({
  onSubmit: userData =>
    dispatch({ type: actionTypes.AUTH_LOGIN, payload: userData }),
});

class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      psw: '',
      rememberMe: null
    }
    //this.changeState = this.changeState.bind(this);
  }

  changeState = (key, value) => {
    this.setState({ [key]: value });
  };

  setTokenHeaders = (accessToken) => {
    instance.defaults.headers.common['Authorization'] = accessToken;
  }

  sendSmsCode = async() => {

    let status = false;

    await authService.phoneCertification()
      .then((resp) => {
        const uuid = resp.data.uuid;
        storeData("uuid", uuid);
        status = true;
      })
      .catch((error) => {
        alert("I'm unable to send you a SMS Verification code. Try again later or contact support on https://hd.cbim.it")
        status = false;
      })
    
    return status;
  }

  getPhoneNumber = () => {
    authService.getPhoneNumber()
      .then((resp) => {
        console.log(resp.data)
        const phone_verified = resp.data.phone_verified
        storeData('phone_verified', phone_verified)
        retrieveData('phone_verified').then((response) => {
          if (response == "false") {
            this.sendSmsCode()
            .then( (resp) => {
              if(resp){
                navigationService.navigateAndReset(navigationConstants.MOBILE_VERIFICATION_PHONE_PAGE)
              }
              else {
                navigationService.navigateAndReset(navigationConstants.LOGIN_PAGE)
              }
            });           
              
          } else {
            navigationService.navigateAndReset(navigationConstants.LOGGED_PAGE)
          }
        })
          .catch(error => {
            (alert(error.resp));
          })
      })
  }

  login = () => {
    authService.login(this.state.psw, this.state.username)
      .then((resp) => {
        console.log(resp.data);
        const access_token = resp.data.access_token
        this.setTokenHeaders(access_token);
        this.getPhoneNumber()
      })
      .catch(error => {
        (alert("The username or password you entered is incorrect", error.resp));

      })
  }

  toggleRememberMe = (value) => {
    this.setState({ rememberMe: value })
    if (value === true) {
      this.rememberUser();
    } else {
      this.forgotUser();
    }
  }

  rememberUser = async () => {
    storeData('username', this.state.username)
    storeData('psw', this.state.psw)
    storeData('togglePreference', this.state.rememberMe)
  }

  forgotUser = async () => {
    removeItem('forgot')
  }

  getRememberedUsername = async () => {
    try {
      const username = retrieveData('username')
      if (username != null) {
        return username;
      }
    } catch (error) {
      console.log(error);
    }
  }

  getRememberedPsw = async () => {
    try {
      const psw = retrieveData('psw')
      if (psw != null) {
        return psw;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    const username = await this.getRememberedUsername();
    const psw = await this.getRememberedPsw();
    
    this.setState({
      username: username || "",
      rememberMe: username ? true : false
    })
    this.setState({
      psw: psw || "",
      rememberMe: psw ? true : false
    })

  }

  render() {
    return (
      <View style={mainStyle.container}>
        <LoginPage
          changeState={this.changeState}
          username={this.state.username}
          password={this.state.psw}
          login={this.login}
          checked={this.state.rememberMe}
          check={this.toggleRememberMe}
        />
      </View>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPageContainer);
