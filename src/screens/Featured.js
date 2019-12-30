import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Header from '../components/Header';

import Card from '../components/Card';
import {PRODUCTS} from '../static/entries';

export default class Featured extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: () => (
        <Icon
          color="#a9a9a9"
          name={'keyboard-backspace'}
          iconStyle={{paddingLeft: 20}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  _renderItem = (item, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        key={index}>
        <Card
          index={index}
          uri={item.image}
          title={item.title}
          condtn={index % 2 === 0}
          wrapperStyle={{marginLeft: 0}}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ContainerView>
        <Section marginTop={20}>
          <Header heading="Featured" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {PRODUCTS.map(this._renderItem)}
          </View>
        </Section>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
