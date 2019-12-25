import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import NotificationsScreen from './src/screens/Notifications';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
});

const App = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Home: {screen: MyDrawerNavigator},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: () => (
          <Icon
            color="#a9a9a9"
            name={'menu'}
            iconStyle={{paddingLeft: 20}}
            onPress={navigation.toggleDrawer}
          />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', paddingRight: 20}}>
            <Icon color="#a9a9a9" name={'add'} iconStyle={{paddingLeft: 7}} />
            <Icon
              color="#a9a9a9"
              name={'person-outline'}
              iconStyle={{paddingLeft: 7}}
            />
            <Icon
              color="#a9a9a9"
              name={'notifications-none'}
              iconStyle={{paddingLeft: 7}}
            />

            <Icon
              color="#a9a9a9"
              name={'shopping-cart'}
              iconStyle={{paddingLeft: 7}}
            />
          </View>
        ),
      };
    },
  },
);

export default createAppContainer(App);
