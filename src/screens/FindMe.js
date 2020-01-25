import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';

export default class FindMe extends Component {
  state = {
    latitude: null,
    longitude: null,
  };

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.findCurrentLocation();
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  findCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        this.set;
        this.setState({
          latitude,
          longitude,
        });
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 100},
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <TouchableOpacity onPress={this.requestLocationPermission}>
            <Text>Where am I?</Text>
          </TouchableOpacity>
          <Text>Longitude: {this.state.longitude}</Text>
          <Text>Latitude: {this.state.latitude}</Text>
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
    marginTop: 20,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});
