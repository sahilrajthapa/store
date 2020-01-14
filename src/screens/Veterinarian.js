import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Card from '../components/Card';
import {VET} from '../static/entries';

export default class Veterinarian extends Component {
  _renderItem = (item, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('VeterinarianDetail')}
        key={index}
        style={{width: '48%'}}>
        <Card
          index={index}
          uri={item.image}
          title={item.title}
          wrapperStyle={{width: '100%'}}
          vetPage
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Our Veterinarian" fontSize={30} screen />
          <View style={styles.cardWrapper}>{VET.map(this._renderItem)}</View>
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
    width: '100%',
    justifyContent: 'space-between',
  },
});
