import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import colors from '../styles/color';
import UserImage from '../components/UserImage';
import UserInfo from '../components/UserInfo';

export default class Profile extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="My Profile" fontSize={30} screen />
          <UserImage />
          <UserInfo label="Name" value="Ram Adhikari" />
          <UserInfo label="Address lane" value="Buddhanagar" />
          <UserInfo label="City" value="Kathmandu" />
          <UserInfo label="Gender" value="Male" />
          <UserInfo label="Email" value="test@test.com" />
          <UserInfo label="Phone Number" value="+977- 123456789" />
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
  card: {
    backgroundColor: colors.white,
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