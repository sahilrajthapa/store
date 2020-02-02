import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

import colors from '../styles/color';

export default function Card({index, uri, title, wrapperStyle}) {
  return (
    <View style={{...styles.imgWrapper, ...wrapperStyle}} key={index}>
      <Image
        source={{uri}}
        borderRadius={8}
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
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
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.gray,
    marginTop: 5,
  },
});
