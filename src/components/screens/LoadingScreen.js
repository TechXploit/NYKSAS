import React from "react";
import { ActivityIndicator } from "react-native";
import { Colors } from "../../globals/Colors";

export default class LoadingScreen extends React.Component {

    render() {
        return (
            <ActivityIndicator size="large" color={Colors.blue} />
        )
    }
}