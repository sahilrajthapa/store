import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import colors from '../styles/color';

export default class Balance extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="My Balance" fontSize={30} screen />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 15,
            }}>
            <Image
              source={require('vetproject/src/static/img/vet2.jpg')}
              style={{width: 125, height: 125, borderRadius: 125}}
            />
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <Text style={styles.grayText}>Name</Text>
              <Text style={styles.text}>Ram Adhikari</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderBottomColor: colors.lightGray,
                borderBottomWidth: 1,
                paddingBottom: 10,
                width: '30%',
              }}>
              <Text style={styles.grayText}>Credit Balance</Text>
              <Text style={styles.text}>Rs 30,000.00</Text>
            </View>
            <View
              style={{
                borderBottomColor: colors.lightGray,
                borderBottomWidth: 1,
                paddingBottom: 10,
                width: '30%',
              }}>
              <Text style={{...styles.grayText, textAlign: 'right'}}>
                Debit Balance
              </Text>
              <Text style={{...styles.text, textAlign: 'right'}}>
                Rs 30,000.00
              </Text>
            </View>
          </View>

          <View style={{marginTop: 50, marginBottom: 20}}>
            <Text
              style={{textAlign: 'center', marginBottom: 20, ...styles.text}}>
              Your Account Activities
            </Text>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <View style={styles.card} key={i}>
                  <View>
                    <Text style={styles.text}>Company Name</Text>
                    <Text>58 minutes ago</Text>
                  </View>
                  <View style={{display: 'flex', justifyContent: 'center'}}>
                    <Text
                      style={{
                        ...styles.text,
                        color: i % 2 ? 'lightgreen' : 'orangered',
                      }}>
                      Rs 50,000.00
                    </Text>
                  </View>
                </View>
              ))}
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
    width: '100%',
    justifyContent: 'space-between',
  },
  grayText: {color: colors.gray, fontSize: 16, marginBottom: 5},
  text: {fontSize: 16},
  card: {
    backgroundColor: colors.white,
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 7,
    marginBottom: 10,
  },
});
