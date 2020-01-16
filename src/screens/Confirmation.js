import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import GradientBtn from '../components/GradientBtn';
import colors from '../styles/color';

export default class Confirmation extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Image
                source={require('vetproject/src/static/img/like.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>

          <View style={{marginTop: 30, marginBottom: 90, width: '65%'}}>
            <Text style={{fontSize: 24, marginBottom: 10, textAlign: 'center'}}>
              Confirmation
            </Text>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
              You have successfully completed payment procedure
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 30}}>
          <GradientBtn
            name="Back To Home"
            raised
            borderRadius={5}
            onPressHandler={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    height: '100%',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    backgroundColor: '#F7F7F7',
    width: 225,
    height: 225,
    borderRadius: 225,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    backgroundColor: colors.lightGray,
    width: 150,
    height: 150,
    borderRadius: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
