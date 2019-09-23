
import { StyleSheet, Platform } from 'react-native'
import { colors } from '../../style/base';

export default styles = StyleSheet.create({
    textInput: {
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
        width: "70%",
        alignSelf: 'center',
    },
    button: {
        width: "70%",
        alignSelf: "center"
    },
    loginText: {
        fontSize: 45,
        fontFamily: "Titillium-Bold"
    },
    textInputStyle: {
        fontSize: 25,
        fontFamily: "Titillium-Bold",
        alignSelf: "center"
    },
    buttonStyle: {
        backgroundColor: colors.loginButtonColor,
        width: "100%",
        height: 60,
        borderRadius: 10
    },
    text: {
        fontSize: 18,
    },
    border: {
        borderBottomColor: colors.navColor,
        borderBottomWidth: 1
    },
    textColor: {
        color: colors.navColor
    },
    checkBoxView: {
        width: "70%",
        alignSelf: 'center',
    },
    saveCredentialsText: {
        fontSize: 18,
        alignSelf: "center",
        marginLeft: 10
    }



})