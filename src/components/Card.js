import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

import colors from '../styles/color';

const img1 = require('vetproject/src/static/img/med1.jpg');
const img2 = require('vetproject/src/static/img/med2.jpg');

export default function Card({index, uri, title, wrapperStyle}) {
  return (
    <View style={{...styles.imgWrapper, ...wrapperStyle}} key={index}>
      <Image
        // source={{uri}}
        source={index % 2 === 0 ? img1 : img2}
        borderRadius={8}
        style={{
          width: '100%',
          height: 225,
        }}></Image>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgWrapper: {
    width: '48%',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  text: {
    fontSize: 14,
    textTransform: 'capitalize',
    color: colors.gray,
    marginTop: 5,
  },
});
