import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Notification from '../components/Notification';

export default class Informations extends Component {
  _renderItem = (item, index) => {
    const {navigation} = this.props;
    return (
      <Notification
        key={index}
        index={index}
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
          <Heading heading="Informations" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {Array(5)
              .fill('')
              .map(this._renderItem)}
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
