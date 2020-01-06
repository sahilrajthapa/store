import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import colors from '../styles/color';

export default function Card({index, condtn, wrapperStyle}) {
  return (
    <View style={{...styles.card, ...(condtn && wrapperStyle)}} key={index}>
      <View style={{width: '100%'}}>
        <Text style={styles.title}>
          Lorem ipsum, or lipsum as it is some times
        </Text>
        <Text style={styles.subTitle}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter.
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon color={colors.gray} name={'access-time'} size={18} />
          <Text style={styles.time}>58 minutes ago</Text>
        </View>
      </View>
      <Icon
        color="#a9a9a9"
        name={'clear'}
        iconStyle={{
          paddingLeft: 7,
          position: 'absolute',
          top: -5,
          right: 0,
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
    padding: 15,
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
    fontWeight: '600',
    textTransform: 'capitalize',
    color: colors.black,
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    color: colors.gray,
    paddingLeft: 3,
  },
});
