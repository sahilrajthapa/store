import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import HorizontalCard from '../components/HorizontalCard';
import GradientBtn from '../components/GradientBtn';
import {
  removeFromCart,
  handleQuantityChange,
  handleQuantityDecrement,
  handleQuantityIncrement,
} from '../actions/cart';

import {postOrderRequest} from '../actions/orders';

class Cart extends Component {
  postOrderHandler = () => {
    const {
      props: {cart, postOrderRequest},
    } = this;

    postOrderRequest({
      rows: cart.map(item => {
        const {quantity, ...product} = item;
        return {
          product,
          quantity,
        };
      }),
    });
  };

  _renderItem = (item, index) => {
    const {
      removeFromCart,
      handleQuantityChange,
      handleQuantityDecrement,
      handleQuantityIncrement,
    } = this.props;
    return (
      <HorizontalCard
        key={index}
        index={index}
        condtn={index === 0}
        wrapperStyle={{marginTop: 15}}
        productPhoto={item.photo_url}
        productName={item.name}
        productId={item.id}
        productQuantity={item.quantity}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
        handleQuantityDecrement={handleQuantityDecrement}
        handleQuantityIncrement={handleQuantityIncrement}
      />
    );
  };

  render() {
    const {
      props: {navigation, cart},
      postOrderHandler,
    } = this;

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
                onPressHandler={postOrderHandler}
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

export default connect(mapStateToProps, {
  removeFromCart,
  handleQuantityChange,
  handleQuantityDecrement,
  handleQuantityIncrement,
  postOrderRequest,
})(Cart);
