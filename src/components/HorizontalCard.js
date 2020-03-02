import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import InputGroup from './InputGroup';

import colors from '../styles/color';

export default function Card({
  index,
  item,
  condtn,
  wrapperStyle,
  removeHandler,
}) {
  return (
    <View style={{...styles.card, ...(condtn && wrapperStyle)}} key={index}>
      <Image
        source={{uri: item.photo_url}}
        style={{
          width: '35%',
          height: 115,
        }}></Image>
      <View style={{paddingHorizontal: 15, width: '65%'}}>
        <Text style={styles.title}>{item.name}</Text>
        {/* <Text style={styles.subTitle}>Lotto.ltdaa</Text> */}
        <View style={{width: '100%'}}>
          <InputGroup quantity={item.quantity} />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 7,
          position: 'absolute',
          top: 5,
          right: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('called');
            removeHandler({id: item.id});
          }}>
          <Icon
            // color="#a9a9a9"
            name={'clear'}
          />
        </TouchableOpacity>
      </View>
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
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 15,
  },
});
