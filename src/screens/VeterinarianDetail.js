import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import colors from '../styles/color';
import UserImage from '../components/UserImage';
import UserInfo from '../components/UserInfo';
import MessageForm from '../components/MessageForm';

export default class VeterinarianDetail extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Veterinarian" fontSize={30} screen />
          <UserImage />
          <UserInfo label="Name" value="Shree Subedi" />
          <UserInfo label="Speciality" value="Physician" />
          <MessageForm title="Queries" />
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
