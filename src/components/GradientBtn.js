import React from 'react';

import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const GradientButton = ({name, onPressHandler}) => (
  <Button
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: ['#6582E9', '#6593F3', '#64B0FE'],
      start: {x: 0, y: 0.5},
      end: {x: 1, y: 0.5},
    }}
    title={name}
    titleStyle={{
      color: Colors.white,
      height: 35,
      paddingTop: 7,
      paddingBottom: 7,
    }}
    buttonStyle={{
      borderRadius: 5,
    }}
    raised
    onPress={onPressHandler}
  />
);

const styles = StyleSheet.create({});

export default GradientButton;
