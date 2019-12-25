import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Section from './Section';
import Header from './Header';

import Card from './Card';
import {ENTRIES1} from '../static/entries';

export default class BestSell extends Component {
  _renderItem = (item, index) => {
    return (
      <Card
        index={index}
        uri={item.illustration}
        title={item.subtitle}
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
        <View style={styles.cardWrapper}>{ENTRIES1.map(this._renderItem)}</View>
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
