import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../globals/Colors';
import { Styles } from '../../globals/Styles';


const styles = StyleSheet.create({
    touchable: {
        overflow: "hidden"
    },
    view: {
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    }
})
export const Button = ({ parentStyle, disabled, onPress, style, textStyle, iconName, onleft = false, iconSize = 18, iconColor = Colors.black, textless = false, bgColor = Colors.blue, color = Colors.black, text = 'Button', onlyBorder = false, ...props }) => (
    <TouchableHighlight
        disabled={disabled}
        onPress={onPress}
        underlayColor={bgColor !== Colors.trans ? Colors.hexToRGB(bgColor, 0.5) : Colors.white}
        style={[
            styles.touchable,
            parentStyle
        ]}
    >
        <View style={[
            styles.view,
            {
                backgroundColor: (!onlyBorder) ? (!disabled) ? bgColor : Colors.lightenDarken(0.35, Colors.hexToRGB(bgColor, 1)) : Colors.trans,
            },
            style
        ]}>
            {((textless || (iconName)) && onleft) ? <Icon name={iconName} color={iconColor} size={iconSize} ></Icon> : null}
            {!textless ?
                <Text style={[
                    Styles.font,
                    (iconName && !onleft) ? { marginRight: 10 } : null,
                    (iconName && onleft) ? { marginLeft: 10 } : null,
                    textStyle,
                ]}
                >
                    {text}
                </Text>
                : null}
            {((textless || iconName) && !onleft) ? <Icon name={iconName} color={iconColor} size={iconSize} ></Icon> : null}
        </View>
    </TouchableHighlight>
)     