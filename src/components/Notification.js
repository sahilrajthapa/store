import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import colors from '../styles/color';

export default function Notification({
  index,
  condtn,
  wrapperStyle,
  detailPage,
}) {
  return (
    <View style={{...styles.card, ...(condtn && wrapperStyle)}}>
      <View style={{width: '100%'}}>
        {detailPage && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon color={colors.gray} name={'access-time'} size={18} />
            <Text style={styles.time}>58 minutes ago</Text>
          </View>
        )}
        <Text
          style={{
            ...styles.title,
            ...(detailPage && {marginTop: 20, marginBottom: 25}),
          }}>
          Lorem ipsum, or lipsum as it is some times
        </Text>
        <Text style={styles.subTitle}>
          {detailPage
            ? 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.'
            : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.'}
        </Text>
        {!detailPage && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon color={colors.gray} name={'access-time'} size={18} />
            <Text style={styles.time}>58 minutes ago</Text>
          </View>
        )}
      </View>
      <Icon
        color="#a9a9a9"
        name={'clear'}
        iconStyle={{
          paddingLeft: 7,
          position: 'absolute',
          top: -8,
          right: -8,
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