import React, {Component} from 'react';

import Section from './Section';
import Heading from './Heading';
import HorizontalScroll from './HorizontalScroll';
import Card from './Card';
import {PRODUCTS} from '../static/entries';

export default class Featured extends Component {
  _renderItem = (item, index) => {
    return (
      <Card
        index={index}
        uri={item.image}
        title={item.title}
        condtn={index === 0}
        wrapperStyle={{marginLeft: 0}}
        key={index}
      />
    );
  };

  render() {
    const {seeAllHandler} = this.props;
    return (
      <Section>
        <Heading heading="Featured" seeAllHandler={seeAllHandler} />
        <HorizontalScroll>{PRODUCTS.map(this._renderItem)}</HorizontalScroll>
      </Section>
    );
  }
}
