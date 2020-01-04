import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

import Header from './Header';

const {height} = Dimensions.get('window');

export default class ContainerView extends Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight: contentHeight});
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    const {children, customStyle, navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
        <Header navigation={navigation} />
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={[styles.scrollview, customStyle]}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F6F9EF',
  },
  scrollview: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
