import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/color';
import {Icon} from 'react-native-elements';
class InputGroup extends Component {
  render() {
    const {
      quantity,
      decrementHandler,
      incrementHandler,
      onChangeHandler,
      editable,
    } = this.props;

    return (
      <View style={styles.inputGroup}>
        <TouchableOpacity
          style={styles.input}
          {...(editable && {onPress: decrementHandler})}>
          <Icon color={colors.black} name={'remove'} size={20} />
        </TouchableOpacity>

        <TextInput
          keyboardType="numeric"
          value={quantity.toString()}
          style={styles.input}
          maxLength={8}
          editable={editable}
          {...(editable && {onChangeText: onChangeHandler})}
        />
        <TouchableOpacity
          style={styles.input}
          {...(editable && {onPress: incrementHandler})}>
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

InputGroup.defaultProps = {
  quantity: 1,
  editable: true,
};

export default InputGroup;
