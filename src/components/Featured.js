import React, {Component} from 'react';

import Section from './Section';
import Heading from './Heading';
import HorizontalScroll from './HorizontalScroll';
import Card from './Card';

export default class Featured extends Component {
  _renderItem = (item, index) => {
    return (
      <Card
        index={index}
        uri={item.photo_url}
        title={item.name}
        wrapperStyle={{...(index > 0 && {marginLeft: 15}), width: 175}}
        key={index}
      />
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
