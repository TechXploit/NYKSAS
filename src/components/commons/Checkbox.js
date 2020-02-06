import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { MyText } from './MyText';
import { Colors } from '../../globals/Colors';
import { Styles } from '../../globals/Styles';


export const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = Colors.black, activeColor = Colors.blue, text = '', ...props }) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor={Colors.white}

        {...props}
    >
        <View style={[
            (
                (text)
                    ? {
                        flexDirection: 'row',
                        alignItems: 'center',
                    }
                    : {
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: size,
                        height: size,
                    }
            ),
            style
        ]}
        >
            <Icon
                size={size}
                color={selected ? activeColor : color}
                name={selected ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
            />
            {
                text ? (
                    <MyText size={"p"} style={[{ paddingLeft: 10, flexShrink: 1 }, textStyle, (selected ? { color: activeColor } : null)]}> {text} </MyText>
                )
                    : null
            }
        </View>
    </TouchableHighlight>
);