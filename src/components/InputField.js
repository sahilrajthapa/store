import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../styles/color';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
    };

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  toggleShowPassword() {
    this.setState({secureInput: !this.state.secureInput});
  }
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      onChangeTextHandler,
      name,
      value,
    } = this.props;
    const color = labelColor || colors.gray;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.gray;
    const borderBottom = borderBottomColor || 'transparent';

    const {secureInput} = this.state;
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
        {inputType === 'password' ? (
          <View style={styles.showButton}>
            <Icon
              color="#a9a9a9"
              name={secureInput ? 'visibility' : 'visibility-off'}
              onPress={this.toggleShowPassword}
            />
          </View>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[
            {color: inputColor, borderBottomColor: borderBottom},
            styles.inputField,
          ]}
          secureTextEntry={secureInput}
          onChangeText={text => onChangeTextHandler(name, text)}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {fontWeight: '600'},
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },

  showButton: {
    position: 'absolute',
    right: 0,
    bottom: 8,
    zIndex: 99,
  },
  showButtonText: {
    color: colors.black,
    fontWeight: '700',
  },
});
export default InputField;
