import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import HorizontalCard from '../components/HorizontalCard';
import GradientBtn from '../components/GradientBtn';
import {PRODUCTS} from '../static/entries';
import colors from '../styles/color';

export default class Checkout extends Component {
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     headerLeft: () => (
  //       <Icon
  //         color="#a9a9a9"
  //         name={'keyboard-backspace'}
  //         iconStyle={{paddingLeft: 20}}
  //         onPress={() => {
  //           navigation.goBack();
  //         }}
  //       />
  //     ),
  //   };
  // };

  _renderItem = (item, index) => {
    if (index > 1) return;
    return (
      <HorizontalCard
        key={index}
        index={index}
        uri={item.image}
        title={item.title}
        condtn={index === 0}
        wrapperStyle={{marginTop: 15}}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Checkout" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {PRODUCTS.map(this._renderItem)}
          </View>
          <View style={styles.addrInfoWrapper}>
            <Text style={styles.addrInfoText}>
              Buddhanagar, New Baneshwor, Ktm
            </Text>
            <Text style={styles.addrInfoText}>House no: 938</Text>
            <Text style={styles.addrInfoText}>Road no: 9</Text>
          </View>
          <View style={styles.sumInfoWrapper}>
            <View style={styles.sumInfo}>
              <Text style={styles.sumInfoText}>Subtotal</Text>
              <Text style={styles.sumInfoText}>Rs 160.00</Text>
            </View>
            <View style={styles.sumInfo}>
              <Text style={styles.sumInfoText}>Discount</Text>
              <Text style={styles.sumInfoText}>10%</Text>
            </View>
            <View style={{...styles.sumInfo, marginBottom: 0}}>
              <Text style={styles.sumInfoText}>Shipping</Text>
              <Text style={styles.sumInfoText}>Rs 16.00</Text>
            </View>
          </View>
          <View style={styles.sumInfo}>
            <Text style={styles.sumInfoText}>Total</Text>
            <Text style={styles.sumInfoText}>Rs 176.00</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <GradientBtn
              name="Buy"
              raised
              borderRadius={5}
              onPressHandler={() => {}}
            />
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
  addrInfoWrapper: {marginTop: 20, marginBottom: 20},
  addrInfoText: {
    fontSize: 18,
  },
  sumInfoWrapper: {
    paddingVertical: 15,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.lightGray,
  },
  sumInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sumInfoText: {
    fontSize: 18,
  },
  buttonWrapper: {
    marginTop: 50,
    marginBottom: 20,
  },
});
