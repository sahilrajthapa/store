import React, {Component} from 'react';
import {Image, Button, View, StyleSheet} from 'react-native';

class Notifications extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({tintColor}) => (
      <>
        <Image
          source={require('../static/img/notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      </>
    ),
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default Notifications;
