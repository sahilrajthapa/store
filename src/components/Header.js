import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../styles/color';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Icon
        color={colors.gray}
        name={navigation.state.key === 'Home' ? 'menu' : 'keyboard-backspace'}
        iconStyle={{paddingLeft: 20}}
        onPress={
          navigation.state.key === 'Home'
            ? () => navigation.toggleDrawer()
            : () => navigation.goBack()
        }
      />
      <View style={{flexDirection: 'row', paddingRight: 20}}>
        <Icon color={colors.gray} name={'add'} iconStyle={styles.icon} />
        <Icon
          color={colors.gray}
          name={'person-outline'}
          iconStyle={styles.icon}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon
            color={colors.gray}
            name={'notifications-none'}
            iconStyle={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon
            color={colors.gray}
            name={'shopping-cart'}
            iconStyle={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: colors.white,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 7,
  },
  icon: {paddingLeft: 7},
});
