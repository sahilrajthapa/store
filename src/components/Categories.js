import React, {Component} from 'react';
import Section from './Section';
import Heading from './Heading';
import HorizontalScroll from './HorizontalScroll';
import CategoryCard from './CategoryCard';

const wrapperStyle = {
  width: 185,
  height: 85,
  margin: 10,
  marginBottom: 4,
};
export default class Categories extends Component {
  render() {
    const {categories, navigation} = this.props;

    return (
      <Section>
        <Heading
          heading="Categories"
          seeAllHandler={() => navigation.navigate('Categories')}
        />
        <HorizontalScroll>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              index={index}
              wrapperStyle={{
                ...wrapperStyle,
                ...(index === 0 && {marginLeft: 0}),
                ...(index === categories.length - 1 && {marginRight: 0}),
              }}
              category={category}
              navigation={navigation}
            />
          ))}
        </HorizontalScroll>
      </Section>
    );
  }
}
