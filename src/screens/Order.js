import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import HorizontalCard from '../components/HorizontalCard';

import {getOrderRequest} from '../actions/orders';

class Order extends Component {
  componentDidMount() {
    this.props.getOrderRequest();
  }
  _renderItem = (item, index) => {
    return (
      <HorizontalCard
        key={index}
        index={index}
        condtn={index === 0}
        wrapperStyle={{marginTop: 15}}
        editable={false}
        productPhoto={item.product.photo_url}
        productName={item.product.name}
        productId={item.product.id}
        productQuantity={item.quantity}
      />
    );
  };

  render() {
    const {navigation, orders} = this.props;

    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="My Orders" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {orders.map(order => order.rows.map(this._renderItem))}
          </View>
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
    orders: state.orders.orders,
  };
};

export default connect(mapStateToProps, {getOrderRequest})(Order);
