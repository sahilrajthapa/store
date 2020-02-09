import React, {Component} from 'react';

import Section from './Section';
import Heading from './Heading';
import HorizontalScroll from './HorizontalScroll';
import Card from './Card';
import {TouchableOpacity} from 'react-native';

export default class Featured extends Component {
  _renderItem = (item, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {productId: item.id})}
        key={index}>
        <Card
          index={index}
          uri={item.photo_url}
          title={item.name}
          wrapperStyle={{...(index > 0 && {marginLeft: 15}), width: 175}}
          key={index}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {seeAllHandler, featuredItems} = this.props;
    return (
      <Section>
        <Heading heading="Featured" seeAllHandler={seeAllHandler} />
        <HorizontalScroll>
          {featuredItems.map(this._renderItem)}
        </HorizontalScroll>
      </Section>
    );
  }
}
