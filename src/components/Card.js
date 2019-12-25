import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import colors from '../styles/color';

export default function Card({index, uri, title, condtn, wrapperStyle}) {
  return (
    <View
      style={{
        ...styles.imgWrapper,
        ...(condtn && wrapperStyle),
      }}
      key={index}>
      <Image
        source={{uri}}
        borderRadius={8}
        style={{
          width: '100%',
          height: '75%',
        }}></Image>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgWrapper: {
    width: 175,
    height: 275,
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 8,
  },

  text: {
    fontSize: 18,
    color: colors.gray,
  },
});
