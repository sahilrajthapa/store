import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import HorizontalCard from '../components/HorizontalCard';
import GradientBtn from '../components/GradientBtn';
import {removeFromCart} from '../actions/cart';

class Cart extends Component {
  _renderItem = (item, index) => {
    const {removeFromCart} = this.props;
    return (
      <HorizontalCard
        key={index}
        index={index}
        // uri={item.photo_url}
        // title={item.name}
        item={item}
        condtn={index === 0}
        wrapperStyle={{marginTop: 15}}
        removeHandler={removeFromCart}
      />
    );
  };

  render() {
    const {navigation, cart} = this.props;

    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Cart" fontSize={30} screen />

          {cart.length === 0 && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                }}>
                <Text style={{fontSize: 18}}>No items in cart.</Text>
              </View>
            </View>
          )}
          {cart.length > 0 && (
            <View style={styles.cardWrapper}>{cart.map(this._renderItem)}</View>
          )}
          {cart.length > 0 && (
            <View style={styles.buttonWrapper}>
              <GradientBtn
                name="Continue"
                raised
                borderRadius={5}
                onPressHandler={() => navigation.navigate('Checkout')}
              />
            </View>
          )}
        </Section>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps, {removeFromCart})(Cart);
