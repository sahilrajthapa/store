import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import UserImage from '../components/UserImage';
import UserInfo from '../components/UserInfo';

import {getProfileRequest} from '../actions/profile';

class Profile extends Component {
  componentDidMount() {
    this.props.getProfileRequest();
  }

  render() {
    const {navigation, profile} = this.props;

    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="My Profile" fontSize={30} screen />
          <UserImage uri={profile.photo} />
          <UserInfo label="Name" value="" />
          <UserInfo label="Address lane" value="" />
          <UserInfo label="City" value={profile.city} />
          <UserInfo label="Gender" value={profile.gender_display} />
          <UserInfo label="Email" value={profile.email} />
          <UserInfo label="Phone Number" value="" />
        </Section>
      </ContainerView>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
  };
};

export default connect(mapStateToProps, {getProfileRequest})(Profile);
