import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../globals/Colors';
import { Styles } from '../../globals/Styles';
export const ViewGradient = ({ gradientStyle, disabled, viewStyle, locations, textStyle, angle = 90, colors = [Colors.blue, Colors.light_blue], borderWidth = 2, onlyBorder = false, ...props }) => (
    <LinearGradient
        colors={!disabled ? colors : [Colors.light_grey, Colors.light_grey]}
        style={[
            (disabled ? { opacity: 0.6 } : null),
            {
                padding: borderWidth,
            },
            gradientStyle
        ]}
        useAngle={true}
        angle={angle}
        locations={locations}
    >

        <View style={[
            {
                backgroundColor: (!onlyBorder) ? Colors.trans : Colors.white,
                padding: 12,
            },
            viewStyle
        ]}>
            {props.children}
        </View>
    </LinearGradient>
)