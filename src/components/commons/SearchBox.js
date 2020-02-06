import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "./Button";
import InputGradient from "./InputGradient";
import { Colors } from "../../globals/Colors";

const styles = StyleSheet.create({
    inputParent: {
        padding: 3,
        borderRadius: 48,
        marginBottom: 0,
        marginLeft: 16,
        flexGrow: 1,
        height: 48
    },
    input: {
        paddingHorizontal: 25,
        fontSize: 16,
        height: "100%"

    },
    inputView: {
        borderRadius: 50,
        height: "100%"
    },
    searchBtn: {
        width: 46,
        height: "100%",
        padding: 0,
    },
    searchBtnParent: {
        borderRadius: 50,
        overflow: "hidden",
    },
})

export default class SearchBox extends React.Component {
    render() {
        return (
            <InputGradient
                colors={[Colors.blue, Colors.pink]}
                parentStyle={styles.inputParent}
                viewStyle={styles.inputView}
                placeholder={"Search"}
                inputStyle={styles.input}
                componentOnRight={
                    <Button
                        bgColor={Colors.trans}
                        textless={true}
                        iconName={"magnify"}
                        iconSize={25}
                        iconColor={Colors.pink}
                        style={styles.searchBtn}
                        parentStyle={styles.searchBtnParent}
                        onPress={() => console.log("Search")}
                    />
                }
            />
        )
    }
}