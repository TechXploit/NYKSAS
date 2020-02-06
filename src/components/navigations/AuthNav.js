import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const AuthNav = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen
        },
        RegisterScreen: {
            screen: RegisterScreen
        },
    },
    {
        initialRouteName: 'RegisterScreen',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createAppContainer(AuthNav);