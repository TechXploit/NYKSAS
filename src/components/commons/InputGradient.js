import React from 'react';
import { TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../globals/Colors';
import { Styles } from '../../globals/Styles';
export default class InputGradient extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isActive: false
        }
    }
    render() {
        return (
            <LinearGradient
                colors={
                    (this.props.colors || [Colors.blue, Colors.light_blue])
                }
                // colors={
                //     (this.state.isActive)
                //         ? (this.props.colors || [Colors.blue, Colors.light_blue])
                //         : this.props.inactiveColors || [Colors.light_grey, Colors.light_grey]
                // }
                style={[
                    { marginBottom: 16, paddingBottom: 2 },
                    this.props.parentStyle
                ]}
                useAngle={true}
                angle={this.props.angle}
                locations={this.props.locations}
            >
                <View
                    style={[
                        (
                            (this.props.componentOnLeft || this.props.componentOnRight)
                                ? { position: "relative", flexDirection: "row", backgroundColor: Colors.white, overflow: "hidden" }
                                : { overflow: "hidden" }
                        ),
                        this.props.viewStyle
                    ]}
                >
                    {
                        this.props.componentOnLeft
                            ? (
                                this.props.componentOnLeft
                            )
                            : null
                    }
                    <TextInput
                        style={[
                            { flexGrow: 1 },
                            Styles.input,
                            this.props.inputStyle
                        ]}
                        onChangeText={this.props.onChangeText || ((value) => this.setState({ value }))}
                        // onFocus={() => this.setState({ isActive: true })}
                        // onBlur={() => this.setState({ isActive: false })}
                        value={this.props.value || this.state.value}
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                        autoCapitalize={this.props.autoCapitalize}
                        autoFocus={this.props.autoFocus}
                        inlineImageLeft={this.props.inlineImageLeft}
                        keyboardType={this.props.keyboardType}
                        maxLength={this.props.maxLength}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={Colors.grey}
                        maxLength={this.props.maxLength}
                        {...this.props}
                    />
                    {
                        this.props.componentOnRight
                            ? (
                                this.props.componentOnRight
                            )
                            : null
                    }
                </View>
            </LinearGradient>
        )
    }
};