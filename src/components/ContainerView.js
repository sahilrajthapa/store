import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

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
    const {children, customStyle} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
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
