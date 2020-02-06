import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../globals/Colors";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color: Colors.pink,
        textAlign:"center"
    },
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
})

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{
                        flex: 1,
                    }}
                    contentContainerStyle={{
                        padding: 16,
                    }}
                >

                    <Text
                        style={styles.textStyle}
                    >
                        Edit Screen
                    </Text>
                </ScrollView>
            </View>
        );
    }
}