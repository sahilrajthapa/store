import React, {Component} from 'react';

import Section from './Section';
import Header from './Header';
import HorizontalScroll from './HorizontalScroll';
import Card from './Card';
import {ENTRIES1} from '../static/entries';

export default class Featured extends Component {
  _renderItem = (item, index) => {
    return (
      <Card
        index={index}
        uri={item.illustration}
        title={item.subtitle}
        condtn={index === 0}
        wrapperStyle={{marginLeft: 0}}
        key={index}
      />
    );
  };

  render() {
    return (
      <Section>
        <Header heading="Featured" />
        <HorizontalScroll>{ENTRIES1.map(this._renderItem)}</HorizontalScroll>
      </Section>
    );
  }
}
