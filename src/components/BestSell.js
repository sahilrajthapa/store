import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Section from './Section';
import Heading from './Heading';

import Card from './Card';

export default class BestSell extends Component {
  _renderItem = (item, index) => {
    return (
      <Card index={index} uri={item.photo_url} title={item.name} key={index} />
    );
  };

  render() {
    const {seeAllHandler, bestSellItems} = this.props;
    return (
      <Section>
        <Heading heading="Best Sell" seeAllHandler={seeAllHandler} />
        <View style={styles.cardWrapper}>
          {bestSellItems.map(this._renderItem)}
        </View>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
