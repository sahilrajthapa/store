import 'react-native-gesture-handler';
import React from 'react';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import NotificationsScreen from './src/screens/Notifications';
import FeaturedScreen from './src/screens/Featured';
import BestSellScreen from './src/screens/BestSell';
import DetailScreen from './src/screens/Detail';
import CartScreen from './src/screens/Cart';
import CheckoutScreen from './src/screens/Checkout';

import {DrawerContent} from './src/components/DrawerContent';

// import HeaderRight from './src/components/HeaderRight';

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: NotificationsScreen,
    },
    Cart: {screen: CartScreen},
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
    Home: {screen: Drawer},
  },
  {
    // defaultNavigationOptions: ({navigation}) => {
    //   return {
    //     headerLeft: () => (
    //       <Icon
    //         color="#a9a9a9"
    //         name={'menu'}
    //         iconStyle={{paddingLeft: 20}}
    //         onPress={navigation.toggleDrawer}
    //       />
    //     ),
    //     headerRight: () => <HeaderRight navigation={navigation} />,
    //   };
    // },
    headerMode: 'none',
  },
);

export default createAppContainer(App);
