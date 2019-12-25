import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import BestSell from '../components/BestSell';

const {height} = Dimensions.get('window');

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../static/img/home-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight: contentHeight});
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}>
          <Grid>
            <Row style={styles.mainWrapper} size={100}>
              <Col>
                <SearchBar />
                <Slider />
                <Categories />
                <Featured />
                <BestSell />
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85D4E7',
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  mainWrapper: {
    padding: 20,
    backgroundColor: '#F6F9EF',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
