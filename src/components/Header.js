import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import colors from '../styles/color';
function Header({navigation, cart}) {
  return (
    <View style={styles.header}>
      <Icon
        color={colors.gray}
        name={navigation.state.key === 'Home' ? 'menu' : 'keyboard-backspace'}
        iconStyle={{paddingLeft: 20}}
        size={30}
        onPress={
          navigation.state.key === 'Home'
            ? () => navigation.toggleDrawer()
            : () => navigation.goBack()
        }
      />
      <View style={{flexDirection: 'row', paddingRight: 20}}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Icon
            color={colors.gray}
            name={'add'}
            iconStyle={styles.icon}
            size={30}
          />
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon
            color={colors.gray}
            name={'person-outline'}
            iconStyle={styles.icon}
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon
            color={colors.gray}
            name={'notifications-none'}
            iconStyle={styles.icon}
            size={30}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            {cart.length > 0 && cart.length < 100 && (
              <View style={styles.iconBadge}>
                <Text style={{color: 'white'}}>{cart.length}</Text>
              </View>
            )}
            <Icon
              color={colors.gray}
              name={'shopping-cart'}
              iconStyle={styles.icon}
              size={30}
            />
          </TouchableOpacity>
        </View>
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
  iconBadge: {
    position: 'absolute',
    top: -12,
    right: -5,
    zIndex: 99,
    width: 25,
    height: 25,
    backgroundColor: '#83C025',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Header);
