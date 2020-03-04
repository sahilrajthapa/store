import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import colors from '../styles/color';

import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import InputGroup from '../components/InputGroup';
import GradientBtn from '../components/GradientBtn';
import {Icon} from 'react-native-elements';
// import {getProductById} from '../actions/products';
import {postOrderRequest} from '../actions/orders';
import {addToCart} from '../actions/cart';

function getInfoText(arr) {
  if (arr && arr.length > 0) {
    return arr.map(item => item.name).join(', ');
  } else {
    return 'No data available';
  }
}

function InfoText({label, text}) {
  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}
class Detail extends Component {
  state = {
    quantity: 1,
    customer: null,
    customerErr: null,
  };

  onChangeHandler = quantity => {
    this.setState({quantity: +quantity.replace(/[^0-9]/g, '')});
  };

  decrementHandler = () => {
    this.setState(prevState => {
      if (prevState.quantity === 0) return;
      return {
        quantity: prevState.quantity - 1,
      };
    });
  };

  incrementHandler = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };

  selectCustomerHandler = customer => {
    if (customer === '0') return;
    this.setState({customer, customerErr: null});
  };

  postOrderHandler = () => {
    const {
      state: {quantity, customer},
      props: {organization, navigation, postOrderRequest},
    } = this;
    if (organization.role === 'Marketing' && !customer) {
      return this.setState({
        customerErr: 'Please select a customer.',
      });
    }
    const {id, name, photo, photo_url} = navigation.getParam('product');

    postOrderRequest({
      rows: [
        {
          quantity: +quantity,
          product: {id, name, photo, photo_url},
        },
      ],
      customer,
    });
  };

  addToCartHandler = () => {
    const {id, name, photo, photo_url} = this.props.navigation.getParam(
      'product',
    );

    this.props.addToCart({
      id,
      name,
      photo,
      photo_url,
      quantity: +this.state.quantity,
    });
  };

  render() {
    const {
      props: {navigation, organization, customers},
      state: {quantity, customer, customerErr},
      decrementHandler,
      incrementHandler,
      onChangeHandler,
      selectCustomerHandler,
      postOrderHandler,
      addToCartHandler,
    } = this;
    const product = navigation.getParam('product');

    return (
      <ContainerView
        navigation={navigation}
        customStyle={{paddingLeft: 0, paddingRight: 0}}>
        <Section propStyle={{marginBottom: 20}}>
          <View style={styles.imgWrapper}>
            <ImageBackground
              source={{uri: product.photo_url}}
              style={{
                width: '100%',
                height: '100%',
              }}></ImageBackground>

            <View
              style={{
                position: 'absolute',
                right: 30,
                bottom: 0,
                zIndex: 99,
                backgroundColor: '#83C025',
                padding: 10,
              }}>
              <TouchableOpacity onPress={addToCartHandler}>
                <Icon
                  color={colors.white}
                  name={'add-shopping-cart'}
                  iconStyle={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.descrpWrapper}>
            <InfoText label="Category" text={getInfoText(product.categories)} />
            <InfoText label="Product ID" text={product.id} />
            <InfoText label="Disease Type" text={getInfoText(product.types)} />
          </View>
          <Accordion title="Description" data={product.description} />
          <Accordion title="Usage" data={product.usage} />
          <View style={styles.quantityWrapper}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Quantity</Text>
            <InputGroup
              quantity={quantity}
              decrementHandler={decrementHandler}
              incrementHandler={incrementHandler}
              onChangeHandler={onChangeHandler}
            />
          </View>

          {organization.role === 'Marketing' && (
            <View
              style={{
                paddingHorizontal: 30,
                marginBottom: 50,
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

          <GradientBtn name="BUY NOW" onPressHandler={postOrderHandler} />
        </Section>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    height: 200,
  },
  title: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontSize: 24,
    fontWeight: '600',
  },
  descrpWrapper: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    paddingRight: 5,
  },
  infoText: {
    fontSize: 14,
    width: '75%',
    paddingTop: 3,
  },
  quantityWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 50,
    marginBottom: 25,
    borderColor: colors.lightGray,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const mapStateToProps = state => {
  return {
    product: state.products.selectedProduct,
    organization: state.login.organization,
    customers: state.customers.customers,
  };
};

export default connect(mapStateToProps, {postOrderRequest, addToCart})(Detail);
