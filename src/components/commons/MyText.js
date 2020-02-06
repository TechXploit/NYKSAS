import React from "react";
import { Text, StyleSheet } from "react-native";

const fontSettings = StyleSheet.create({
    h1: {
        fontSize: 60,
    },
    h2: {
        fontSize: 54
    },
    h3: {
        fontSize: 50
    },
    h4: {
        fontSize: 44
    },
    h5: {
        fontSize: 40
    },
    h6: {
        fontSize: 36
    },
    p: {
        fontSize: 18
    }
})
export const MyText = function ({ style, size, ...props }) {
    return (
        <Text style={[
            fontSettings[size],
            style
        ]} >
            {props.children}
        </Text>
    )
} 
