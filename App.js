import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigations';
import {store} from './src/store';
import NavigationService from './src/navigations/NavigationService';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
