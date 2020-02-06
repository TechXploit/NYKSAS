import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../globals/Colors";
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color: Colors.blue
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.viewStyle}
            >
                <Text
                    style={styles.textStyle}
                >
                    Login Screen
               </Text>
            </View>
        )
    }
}