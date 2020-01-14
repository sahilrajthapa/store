import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

import colors from '../styles/color';

const img1 = require('vetproject/src/static/img/med1.jpg');
const img2 = require('vetproject/src/static/img/med2.jpg');

const vet1 = require('vetproject/src/static/img/vet1.jpg');
const vet2 = require('vetproject/src/static/img/vet2.jpg');

export default function Card({index, uri, title, wrapperStyle, vetPage}) {
  return (
    <View style={{...styles.imgWrapper, ...wrapperStyle}} key={index}>
      <Image
        // source={{uri}}
        source={
          vetPage
            ? index % 2 === 0
              ? vet1
              : vet2
            : index % 2 === 0
            ? img1
            : img2
        }
        borderRadius={8}
        style={{
          width: '100%',
          height: 200,
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
