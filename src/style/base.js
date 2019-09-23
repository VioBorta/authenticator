import { StyleSheet } from "react-native";

export const colors = {
    black: "#000000",
    lightGray: "#D8D5D5",
    darkGray: "#505050",
    loginButtonColor: "#14b814",
    buttonColor: "#007bff",
    navColor: "#00B0F0"

};
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 15,
        marginRight: 15
    },
    mt_20: {
        marginTop: 20
    },
    containerCenter: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
    },
    alignSelfCenter: {
        alignSelf: "center",
    },
    flex1: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    }
});