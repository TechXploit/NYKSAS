import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
export const Styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent:"center"
    },
    font: {
        fontSize: 18,
    },
    input: {
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        color: Colors.black
    },
    inputParent: {
        backgroundColor: Colors.trans,
        borderBottomWidth: 1,
        marginBottom: 10,
    }
});