import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Header from '../components/Header';

import Card from '../components/Card';
import {ENTRIES1} from '../static/entries';

export default class Featured extends Component {
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
    return (
      <Card
        index={index}
        uri={item.illustration}
        title={item.subtitle}
        condtn={index % 2 === 0}
        wrapperStyle={{marginLeft: 0}}
        key={index}
      />
    );
  };

  render() {
    return (
      <ContainerView>
        <Section marginTop={20}>
          <Header heading="Featured" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {ENTRIES1.map(this._renderItem)}
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
});
