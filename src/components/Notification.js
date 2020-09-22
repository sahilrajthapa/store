import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import formatDistance from 'date-fns/formatDistance';
import colors from '../styles/color';

export default function Notification({wrapperStyle, notification, detailPage}) {
  return (
    <View style={{...styles.card, ...wrapperStyle}}>
      <View style={{width: '100%'}}>
        <Text
          style={{
            ...styles.title,
            // ...(detailPage && {marginTop: 15, marginBottom: 25}),
          }}>
          {notification.title}
        </Text>
        <Text
          style={styles.subTitle}
          {...!detailPage && {numberOfLines: 2, ellipsizeMode: 'tail'}}>
          {notification.description}
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon color={colors.gray} name={'access-time'} size={18} />
          <Text style={styles.time}>
            {formatDistance(Date.parse(notification.date), new Date())} ago
          </Text>
        </View>
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
    // marginTop: 10,
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
