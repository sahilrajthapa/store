import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import GradientBtn from '../components/GradientBtn';

export default class Contact extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Contact" fontSize={30} screen />

          <View style={styles.addrInfoWrapper}>
            <Text style={styles.addrInfoText}>
              Buddhanagar, New Baneshwor, Ktm
            </Text>
            <Text style={styles.addrInfoText}>House no: 938</Text>
            <Text style={styles.addrInfoText}>Road no: 9</Text>
          </View>

          <View style={styles.addrInfoWrapper}>
            <Text style={styles.addrInfoText}>
              Buddhanagar, New Baneshwor, Ktm
            </Text>
            <Text style={styles.addrInfoText}>House no: 938</Text>
            <Text style={styles.addrInfoText}>Road no: 9</Text>
          </View>

          <View style={styles.addrInfoWrapper}>
            <Text style={styles.addrInfoText}>
              Buddhanagar, New Baneshwor, Ktm
            </Text>
            <Text style={styles.addrInfoText}>House no: 938</Text>
            <Text style={styles.addrInfoText}>Road no: 9</Text>
          </View>

          <View
            style={{
              marginTop: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '40%',
              }}>
              <GradientBtn
                name="Call Us"
                raised
                borderRadius={5}
                onPressHandler={() => {}}
              />
            </View>
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
  addrInfoWrapper: {marginTop: 25},
  addrInfoText: {
    fontSize: 18,
  },
});
