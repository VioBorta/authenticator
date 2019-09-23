import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
    circle: {
      overflow: 'hidden',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loader: {
      position: 'absolute',
      top: 0
    }
  }));