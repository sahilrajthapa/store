import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import Section from './Section';
import Heading from './Heading';
import HorizontalScroll from './HorizontalScroll';

import {ENTRIES1} from '../static/entries';
import colors from '../styles/color';

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

export default class Categories extends Component {
  _renderItem = (item, index) => {
    return (
      <View
        style={{
          ...styles.imgWrapper,
          ...(index === 0 && {marginLeft: 0}),
          ...(index === ENTRIES1.length - 1 && {marginRight: 0}),
        }}
        key={index}>
        <ImageBackground
          source={{uri: item.image}}
          imageStyle={{borderRadius: 8}}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              ...styles.textWrapper,
              backgroundColor: `rgba(${getColor(index)})`,
            }}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    return (
      <Section>
        <Heading heading="Categories" />
        <HorizontalScroll>{ENTRIES1.map(this._renderItem)}</HorizontalScroll>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper: {
    width: 145,
    height: 85,
    margin: 10,
    // marginBottom: 4,
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
