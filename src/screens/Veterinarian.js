import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Card from '../components/Card';

import {getContactsRequest} from '../actions/contacts';
class Veterinarian extends Component {
  componentDidMount() {
    this.props.getContactsRequest();
  }
  _renderItem = (contact, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('VeterinarianDetail', {contact})}
        key={index}
        style={{width: '48%'}}>
        {contact.user && (
          <Card
            index={index}
            uri={contact.user && contact.user.photo_url}
            title={contact.user && contact.user.username}
            wrapperStyle={{width: '100%'}}
          />
        )}
      </TouchableOpacity>
    );
  };

  render() {
    const {navigation, contacts} = this.props;

    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Our Veterinarian" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {contacts.map(this._renderItem)}
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
});

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
});

export default connect(
  mapStateToProps,
  {getContactsRequest},
)(Veterinarian);
