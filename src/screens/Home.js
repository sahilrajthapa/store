import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import BestSell from '../components/BestSell';

export default class Home extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   // drawerIcon: ({tintColor}) => (
  //   //   <Image
  //   //     source={require('../static/img/home-icon.png')}
  //   //     style={[styles.icon, {tintColor: tintColor}]}
  //   //   />
  //   // ),
  // };

  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Grid>
          <Row style={styles.mainWrapper} size={100}>
            <Col>
              <SearchBar />
              <Slider />
              <Categories />
              <Featured seeAllHandler={() => navigation.navigate('Featured')} />
              <BestSell />
            </Col>
          </Row>
        </Grid>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    // padding: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
