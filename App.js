import React, { Component } from 'react'
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from 'expo-font';

import store from "./src/store"
import navigationService from './src/navigation/navigationService';
import NavigationContainer from './src/navigation/navigationContainer';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Titillium-Bold': require('./assets/fonts/Titillium-Bold.otf'),    
      'Titillium-Black': require('./assets/fonts/Titillium-Black.otf'),
      'Titillium-BoldUpright':  require('./assets/fonts/Titillium-BoldUpright.otf'),
      'Titillium-SemiboldUpright': require('./assets/fonts/Titillium-SemiboldUpright.otf'),
      'Titillium-Semibold': require('./assets/fonts/Titillium-Semibold.otf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded) {
      return <AppLoading />;
    }
      return(<Provider store={store}>
        <NavigationContainer
          ref={navigatorRef => {
            navigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>)
  }
}
