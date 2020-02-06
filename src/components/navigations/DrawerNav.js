import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';
import ImageUploadScreen from '../screens/ImageUploadScreen';
import { Colors } from '../../globals/Colors';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';

const config = {
    drawerWidth: (Dimensions.get('window').width) * 0.85,
    headerMode: "screen",
}

const HomeStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                initialRouteName: "Home",
                header: <Header navigation={navigation} />
            }),
        }
    }
)
const EditStack = createStackNavigator(
    {
        EditScreen: {
            screen: EditScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Edit",
                initialRouteName: "Edit",
                header: <Header navigation={navigation} />
            }),
        }
    }
)



const ImageUploadStack = createStackNavigator(
    {
        ImageUploadScreen: {
            screen: ImageUploadScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Image",
                initialRouteName: "Image",
                header: <Header navigation={navigation} />
            }),
        }
    }
)

const DrawerItems = {
    HomeScreen: {
        screen: HomeStack,
        navigationOptions: {
            drawerBackgroundColor: Colors.black,
            drawerIcon: () => <Icon name="home" size={25} color={Colors.black} />,
            drawerLabel: "Home",
        }
    },
    EditScreen: {
        screen: EditStack,
        navigationOptions: {
            drawerBackgroundColor: Colors.black,
            drawerIcon: () => <Icon name="pencil" size={25} color={Colors.black} />,
            drawerLabel: "Edit",

        }
    },
    ImageUploadScreen: {
        screen: ImageUploadStack,
        navigationOptions: {
            drawerBackgroundColor: Colors.black,
            drawerIcon: () => <Icon name="image-plus" size={25} color={Colors.black} />,
            drawerLabel: "Image",

        }
    },
}

const DrawerNav = createDrawerNavigator(
    DrawerItems,
    config
);

export default createAppContainer(DrawerNav);

