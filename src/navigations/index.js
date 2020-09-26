import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import NotificationsScreen from '../screens/Notifications';
import NotificationDetailScreen from '../screens/NotificationDetail';
import ProductListScreen from '../screens/ProductList';
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
import InformationScreen from '../screens/Information';
import ConfirmationScreen from '../screens/Confirmation';
import ContactScreen from '../screens/Contact';
import CategoriesScreen from '../screens/Categories';
import SearchResultScreen from '../screens/SearchResult';

import FindMeScreen from '../screens/FindMe';
import AuthLoadingScreen from '../screens/AuthLoading';
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
    Information: {screen: InformationScreen},
    Veterinarian: {
      screen: VeterinarianScreen,
      navigationOptions: {drawerLabel: 'Our Veterinarian'},
    },
    // Contact: {
    //   screen: ContactScreen,
    //   navigationOptions: {drawerLabel: 'Contacts'},
    // },
    // FindMe: {
    //   screen: FindMeScreen,
    //   navigationOptions: {drawerLabel: 'Find Me'},
    // },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeBackgroundColor: '#fff',
    },
  },
);

const AppStack = createStackNavigator(
  {
    // Login: {screen: LoginScreen},
    ProductList: {
      screen: ProductListScreen,
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
    Categories: {screen: CategoriesScreen},
    SearchResult: {screen: SearchResultScreen},
    Home: {screen: Drawer},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {Login: {screen: LoginScreen}},
  {headerMode: 'none'},
);

const navigations = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  },
);
export default createAppContainer(navigations);
