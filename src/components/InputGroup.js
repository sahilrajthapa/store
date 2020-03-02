import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/color';
import {Icon} from 'react-native-elements';

export default class Accordian extends Component {
  render() {
    const {
      quantity = 1,
      decrementHandler,
      incrementHandler,
      onChangeHandler,
    } = this.props;
    return (
      <View style={styles.inputGroup}>
        <TouchableOpacity onPress={decrementHandler} style={styles.input}>
          <Icon color={colors.black} name={'remove'} size={20} />
        </TouchableOpacity>

        <TextInput
          keyboardType="numeric"
          onChangeText={onChangeHandler}
          value={quantity.toString()}
          style={styles.input}
          maxLength={8}
        />
        <TouchableOpacity onPress={incrementHandler} style={styles.input}>
          <Icon color={colors.black} name={'add'} size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    // width: 100,
  },
  input: {
    textAlign: 'center',
    paddingHorizontal: 10,
    // height: '100%',
  },
});
