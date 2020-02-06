import React from "react"
import { View, StyleSheet } from "react-native"
import { ButtonGradient } from "../commons/ButtonGradient"
import { Colors } from "../../globals/Colors"
import SearchBox from "../commons/SearchBox"

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: Colors.light_grey,
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSearchBox: false
        }
        this._toggleSearchBox = this._toggleSearchBox.bind(this)
    }
    _toggleSearchBox() {
        const toggle = this.state.isSearchBox
        this.setState({ isSearchBox: !toggle })
    }
    render() {
        return (
            <View style={styles.container}>
                <ButtonGradient
                    colors={[Colors.blue, Colors.pink]}
                    style={{ width: 48, height: 48, borderRadius: 48 }}
                    textless={true}
                    gradientStyle={{ padding: 0, paddingHorizontal: 0, justifyContent: "center" }}
                    onPress={() => this.props.navigation.openDrawer()}
                    iconName={"menu"}
                    // iconName={"dots-vertical-circle-outline"}
                    iconSize={30}
                    iconColor={Colors.white}
                />
            </View>
        )
    }
}
