import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import NotificationsScreen from '../screens/Notifications';
import NotificationDetailScreen from '../screens/NotificationDetail';
import FeaturedScreen from '../screens/Featured';
import BestSellScreen from '../screens/BestSell';
import DetailScreen from '../screens/Detail';
import CartScreen from '../screens/Cart';
import CheckoutScreen from '../screens/Checkout';
import MessageScreen from '../screens/Message';
import BalanceScreen from '../screens/Balance';
import OrderScreen from '../screens/Order';
import ProfileScreen from '../screens/Profile';
import VeterinarianScreen from '../screens/Veterinarian';
import VeterinarianDetailScreen from '../screens/VeterinarianDetail';
import InformationsScreen from '../screens/Informations';
import ConfirmationScreen from '../screens/Confirmation';
import ContactScreen from '../screens/Contact';

import FindMeScreen from '../screens/FindMe';
import {DrawerContent} from '../components/DrawerContent';

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
    Contact: {
      screen: ContactScreen,
      navigationOptions: {drawerLabel: 'Contacts'},
    },
    FindMe: {
      screen: FindMeScreen,
      navigationOptions: {drawerLabel: 'Find Me'},
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeBackgroundColor: '#fff',
    },
  },
);

const navigations = createStackNavigator(
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
    Confirmation: {
      screen: ConfirmationScreen,
    },
    Home: {screen: Drawer},
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(navigations);
