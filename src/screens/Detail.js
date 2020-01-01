import React, {Component} from 'react';
import {ImageBackground, Text, View, StyleSheet, Button} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../styles/color';

import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import InputGroup from '../components/InputGroup';
import GradientBtn from '../components/GradientBtn';
export default class Detail extends Component {
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

  render() {
    return (
      <ContainerView customStyle={{paddingLeft: 0, paddingRight: 0}}>
        <Section propStyle={{marginBottom: 20}}>
          <View style={styles.imgWrapper}>
            <ImageBackground
              source={require('../static/img/med1.jpg')}
              style={{
                width: '100%',
                height: '100%',
              }}></ImageBackground>
          </View>
          <Text style={styles.title}>Enrofloxacin Injection</Text>
          <View style={styles.descrpWrapper}>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoLabel}>Category:</Text>
              <Text style={styles.infoText}>Chicken, Turkey, Swine, Quail</Text>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoLabel}>Product ID:</Text>
              <Text style={styles.infoText}>1234</Text>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoLabel}>Disease Type:</Text>
              <Text style={styles.infoText}>
                Necrotic enteritis , Transmissible enteritis
              </Text>
            </View>
          </View>
          <Accordion
            title="Description"
            data="Enrofloxacin works by inhibiting the process of DNA synthesis within the bacterial cells, which results in cell death. This drug is commonly used to treat a range of bacterial infections, including those of the skin, urinary tract, and respiratory system, as well as infections that result from wounds."
          />
          <Accordion
            title="Usage"
            data="Enrofloxacin works by inhibiting the process of DNA synthesis within the bacterial cells, which results in cell death. This drug is commonly used to treat a range of bacterial infections, including those of the skin, urinary tract, and respiratory system, as well as infections that result from wounds."
          />
          <View style={styles.quantityWrapper}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Quantity</Text>
            <InputGroup />
          </View>

          <GradientBtn name="BUY NOW" onPressHandler={() => {}} />
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
    padding: 30,

    fontSize: 26,
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
    // flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '700',
    paddingRight: 5,
  },
  infoText: {
    fontSize: 16,
    width: 250,
    paddingTop: 2,
  },
  quantityWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 50,
    marginBottom: 70,
    borderColor: colors.lightGray,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
