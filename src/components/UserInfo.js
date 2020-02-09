import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../styles/color';
export default function UserInfo({label, value}) {
  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.grayText}>{label}</Text>
      <Text style={styles.text}>{value ? value : 'No data available'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 15,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  grayText: {color: colors.gray, fontSize: 16, marginBottom: 5},
  text: {fontSize: 16},
});
