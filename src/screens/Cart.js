import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Header from '../components/Header';

import HorizontalCard from '../components/HorizontalCard';
import GradientBtn from '../components/GradientBtn';
import {PRODUCTS} from '../static/entries';

export default class Cart extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: () => (
        <Icon
          color="#a9a9a9"
          name={'keyboard-backspace'}
          iconStyle={{paddingLeft: 20}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  _renderItem = (item, index) => {
    const {navigation} = this.props;
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
    return (
      <ContainerView>
        <Section marginTop={20}>
          <Header heading="Cart" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {PRODUCTS.map(this._renderItem)}
          </View>
          <View style={styles.buttonWrapper}>
            <GradientBtn
              name="Continue"
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
  buttonWrapper: {
    marginVertical: 20,
  },
});
