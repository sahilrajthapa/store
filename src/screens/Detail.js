import React, {Component} from 'react';
import {ImageBackground, Text, View, StyleSheet, Button} from 'react-native';
import colors from '../styles/color';

import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import InputGroup from '../components/InputGroup';
import GradientBtn from '../components/GradientBtn';

const data =
  'Enrofloxacin works by inhibiting the process of DNA synthesis within the bacterial cells, which results in cell death. This drug is commonly used to treat a range of bacterial infections, including those of the skin, urinary tract, and respiratory system, as well as infections that result from wounds.';

function InfoText({label, text}) {
  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}
export default class Detail extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ContainerView
        navigation={navigation}
        customStyle={{paddingLeft: 0, paddingRight: 0}}>
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
            <InfoText label="Category" text="Chicken, Turkey, Swine, Quail" />
            <InfoText label="Product ID" text="1234" />
            <InfoText
              label="Disease Type"
              text=" Necrotic enteritis , Transmissible enteritis"
            />
          </View>
          <Accordion title="Description" data={data} />
          <Accordion title="Usage" data={data} />
          <View style={styles.quantityWrapper}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Quantity</Text>
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
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontSize: 24,
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    paddingRight: 5,
  },
  infoText: {
    fontSize: 14,
    width: '75%',
    paddingTop: 3,
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
