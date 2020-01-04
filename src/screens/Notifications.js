import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Notification from '../components/Notification';
import {PRODUCTS} from '../static/entries';

export default class Notifications extends Component {
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
    return (
      <Notification
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
          <Heading heading="Notifications" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {PRODUCTS.map(this._renderItem)}
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
