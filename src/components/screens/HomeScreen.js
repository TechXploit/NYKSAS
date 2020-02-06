import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../globals/Colors";
import { Button } from "../commons/Button";
import { ButtonGradient } from "../commons/ButtonGradient";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color: Colors.pink,
        textAlign: "center"
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
        const colorsList = Object.keys(Colors).filter((k) => (
            typeof Colors[k] !== "function"
        ))

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
                        Home Screen
                    </Text>
                    {
                        colorsList.map((k, i) => {
                            return (
                                < View key={i} >
                                    <Button
                                        bgColor={Colors[k]}
                                        style={{
                                            height: 64
                                        }}
                                        parentStyle={{
                                            marginVertical: 16
                                        }}
                                        text={"Button " + k.toUpperCase()}
                                        onPress={() => console.log()}
                                    />
                                    <Button
                                        bgColor={Colors[k]}
                                        style={{
                                            height: 64,
                                            borderColor: Colors[k],
                                            borderWidth: 2
                                        }}
                                        parentStyle={{
                                            marginVertical: 16
                                        }}
                                        onlyBorder={true}
                                        text={"Button Border " + k.toUpperCase()}
                                        onPress={() => console.log()}

                                    />
                                    <ButtonGradient
                                        colors={[Colors[k], Colors.trans]}
                                        style={{
                                            height: 64,
                                            marginVertical: 16
                                        }}
                                        gradientStyle={{
                                            justifyContent: "center",
                                        }}
                                        text={"Gradient Button " + k.toUpperCase()}
                                        onPress={() => console.log()}
                                    />
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View >
        );
    }
}