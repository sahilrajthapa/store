import React, {Component} from 'react';
import Section from './Section';
import Heading from './Heading';
import HorizontalScroll from './HorizontalScroll';
import CategoryCard from './CategoryCard';
import {ENTRIES1} from '../static/entries';

const wrapperStyle = {
  width: 185,
  height: 85,
  margin: 10,
  marginBottom: 4,
};
export default class Categories extends Component {
  render() {
    const {categories, seeAllHandler} = this.props;

    return (
      <Section>
        <Heading heading="Categories" seeAllHandler={seeAllHandler} />
        <HorizontalScroll>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              index={index}
              wrapperStyle={{
                ...wrapperStyle,
                ...(index === 0 && {marginLeft: 0}),
                ...(index === ENTRIES1.length - 1 && {marginRight: 0}),
              }}
              category={category}
            />
          ))}
        </HorizontalScroll>
      </Section>
    );
  }
}
