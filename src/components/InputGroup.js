import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/color';
import {Icon} from 'react-native-elements';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  render() {
    return (
      <View style={styles.inputGroup}>
        <TouchableOpacity onPress={this.decrementHandler} style={styles.input}>
          <Icon color={colors.black} name={'remove'} size={20} />
        </TouchableOpacity>

        <TextInput
          keyboardType="numeric"
          onChangeText={this.onChangeHandler}
          value={this.state.quantity.toString()}
          style={styles.input}
          maxLength={8}
        />
        <TouchableOpacity onPress={this.incrementHandler} style={styles.input}>
          <Icon color={colors.black} name={'add'} size={20} />
        </TouchableOpacity>
      </View>
    );
  }

  onChangeHandler = quantity => {
    this.setState({quantity: +quantity.replace(/[^0-9]/g, '')});
  };

  decrementHandler = () => {
    this.setState(prevState => {
      if (prevState.quantity === 0) return;
      return {
        quantity: prevState.quantity - 1,
      };
    });
  };

  incrementHandler = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };
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
