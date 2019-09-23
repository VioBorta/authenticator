
import { StyleSheet, Platform } from 'react-native'

export default styles = StyleSheet.create({
   
    container: {
        flex: 1,
        flexDirection: 'row'
      },
      camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      rectWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      rect: {
        height: 250,
        width: 250,
        borderWidth: 0.5,
        borderColor: '#2db7f5',
        backgroundColor: 'transparent'
      },
      corner: {
        width: 20,
        height: 20,
        position: 'absolute',
        borderColor: '#2db7f5',
        backgroundColor: 'transparent'
      },
      lt: {
        left: 0,
        top: 0,
        borderLeftWidth: 3,
        borderTopWidth: 3
      },
      rt: {
        right: 0,
        top: 0,
        borderRightWidth: 3,
        borderTopWidth: 3
      },
      lb: {
        left: 0,
        bottom: 0,
        borderLeftWidth: 3,
        borderBottomWidth: 3
      },
      rb: {
        right: 0,
        bottom: 0,
        borderRightWidth: 3,
        borderBottomWidth: 3
      }
})