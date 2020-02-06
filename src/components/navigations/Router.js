import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/LoadingScreen';
import AuthNav from './AuthNav';
import DrawerNav from './DrawerNav';

const Routes = createSwitchNavigator(
    {
        Auth: AuthNav,
        Main: DrawerNav,
        MiddleWare: LoadingScreen
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerMode: "none"
        }
    }
)

export default createAppContainer(Routes);