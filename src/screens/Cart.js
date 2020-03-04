import React, {Component} from 'react';
import {View, Picker, StyleSheet, Text} from 'react-native';
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
  state = {
    customer: null,
    customerErr: null,
  };

  selectCustomerHandler = customer => {
    if (customer === '0') return;
    this.setState({customer, customerErr: null});
  };

  postOrderHandler = () => {
    const {
      state: {customer},
      props: {cart, organization, postOrderRequest},
    } = this;

    if (organization.role === 'Marketing' && !customer) {
      return this.setState({
        customerErr: 'Please select a customer.',
      });
    }
    postOrderRequest({
      rows: cart.map(item => {
        const {quantity, ...product} = item;
        return {
          product,
          quantity,
        };
      }),
      customer,
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
      state: {customer, customerErr},
      props: {navigation, cart, organization, customers},
      selectCustomerHandler,
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

          {cart.length > 0 && organization.role === 'Marketing' && (
            <View
              style={{
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                Select Customer
              </Text>
              <Picker
                selectedValue={customer}
                style={{height: 50, width: '100%'}}
                onValueChange={selectCustomerHandler}>
                <Picker.Item label="Select" value="0" />
                {customers.map(customer => (
                  <Picker.Item
                    key={customer.id}
                    label={customer.user.username}
                    value={customer.id}
                  />
                ))}
              </Picker>

              {customerErr && <Text style={{color: 'red'}}>{customerErr}</Text>}
            </View>
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
    organization: state.login.organization,
    customers: state.customers.customers,
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  handleQuantityChange,
  handleQuantityDecrement,
  handleQuantityIncrement,
  postOrderRequest,
})(Cart);
