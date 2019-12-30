import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Section from './Section';
import Header from './Header';

import Card from './Card';
import {PRODUCTS} from '../static/entries';

export default class BestSell extends Component {
  _renderItem = (item, index) => {
    return (
      <Card
        index={index}
        uri={item.image}
        title={item.title}
        condtn={index % 2 === 0}
        wrapperStyle={{marginLeft: 0}}
        key={index}
      />
    );
  };

  render() {
    return (
      <Section>
        <Header heading="Best Sell" />
        <View style={styles.cardWrapper}>{PRODUCTS.map(this._renderItem)}</View>
      </Section>
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
