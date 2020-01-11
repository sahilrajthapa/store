import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import InputGroup from './InputGroup';

import colors from '../styles/color';

const img1 = require('vetproject/src/static/img/med1.jpg');
const img2 = require('vetproject/src/static/img/med2.jpg');

export default function Card({index, uri, title, condtn, wrapperStyle}) {
  return (
    <View style={{...styles.card, ...(condtn && wrapperStyle)}} key={index}>
      <Image
        source={index % 2 === 0 ? img1 : img2}
        // borderRadius={8}
        style={{
          width: '35%',
          height: 115,
        }}></Image>
      <View style={{paddingHorizontal: 15, width: '65%'}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Lotto.ltdaa</Text>
        <View style={{width: '100%'}}>
          <InputGroup />
        </View>
      </View>
      <Icon
        color="#a9a9a9"
        name={'clear'}
        iconStyle={{
          paddingLeft: 7,
          position: 'absolute',
          top: -10,
          right: -10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 7,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: colors.black,
    marginTop: 5,
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 15,
  },
});
