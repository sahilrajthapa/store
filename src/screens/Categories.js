import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import CategoryCard from '../components/CategoryCard';
import Card from '../components/Card';
import colors from '../styles/color';
import {getCategoriesRequest} from '../actions/categories';

function getColor(i) {
  const colors = {
    blue: '138,161,231,0.75',
    red: '239,97,122,0.75',
    green: '40,193,141,0.75',
  };

  if (i % 3 == 0) return colors.blue;

  if (i % 3 === 1) return colors.red;

  if (i % 3 === 2) return colors.green;
}

class Categories extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    const {navigation, categories} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Categories" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                index={index}
                wrapperStyle={styles.wrapperStyle}
                navigation={navigation}
                category={category}
              />
            ))}
          </View>
        </Section>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    width: '48%',
    height: 85,
    marginTop: 15,
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
  textWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  text: {
    fontSize: 18,
    color: colors.white,
  },
});

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(
  mapStateToProps,
  {getCategoriesRequest},
)(Categories);
