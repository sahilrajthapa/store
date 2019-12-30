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
        // source={{uri}}
        source={require('../static/img/med2.jpg')}
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
    marginBottom: 10,
    marginLeft: 20,
    borderRadius: 8,
    marginBottom: 10,
  },

  text: {
    fontSize: 18,
    color: colors.gray,
    marginTop: 5,
  },
});
