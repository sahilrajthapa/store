import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import NotificationsScreen from './src/screens/Notifications';
import NotificationDetailScreen from './src/screens/NotificationDetail';
import FeaturedScreen from './src/screens/Featured';
import BestSellScreen from './src/screens/BestSell';
import DetailScreen from './src/screens/Detail';
import CartScreen from './src/screens/Cart';
import CheckoutScreen from './src/screens/Checkout';
import MessageScreen from './src/screens/Message';
import BalanceScreen from './src/screens/Balance';
import OrderScreen from './src/screens/Order';
import ProfileScreen from './src/screens/Profile';
import VeterinarianScreen from './src/screens/Veterinarian';
import VeterinarianDetailScreen from './src/screens/VeterinarianDetail';
import InformationsScreen from './src/screens/Informations';

import {DrawerContent} from './src/components/DrawerContent';

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {drawerLabel: 'My Profile'},
    },
    Balance: {
      screen: BalanceScreen,
      navigationOptions: {drawerLabel: 'My Balance'},
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: {drawerLabel: 'My Orders'},
    },
    Informations: {screen: InformationsScreen},
    Veterinarian: {
      screen: VeterinarianScreen,
      navigationOptions: {drawerLabel: 'Our Veterinarian'},
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeBackgroundColor: '#fff',
    },
  },
);

const App = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Featured: {
      screen: FeaturedScreen,
    },
    BestSell: {screen: BestSellScreen},
    Checkout: {screen: CheckoutScreen},
    Detail: {
      screen: DetailScreen,
    },
    Message: {screen: MessageScreen},

    NotificationDetail: {screen: NotificationDetailScreen},
    Notifications: {
      screen: NotificationsScreen,
    },
    VeterinarianDetail: {screen: VeterinarianDetailScreen},
    Cart: {screen: CartScreen},
    Home: {screen: Drawer},
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(App);
