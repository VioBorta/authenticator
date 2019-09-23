import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from "react-native-elements";

import styles from "./Button.style";

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title, submitAction, customStyle } = this.props;
    return (
      <View style={styles.button}>
        <Button
          title={title}
          buttonStyle={[styles.buttonStyle, customStyle]}
          onPress={submitAction}
          titleStyle={[{fontSize:27,fontFamily: 'Titillium-Bold'}]}
        />
      </View>
    );
  }
}
