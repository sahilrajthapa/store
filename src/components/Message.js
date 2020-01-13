import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';

import GradientBtn from './GradientBtn';

import colors from '../styles/color';

class Message extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <View>
        <View style={{marginTop: 35, marginBottom: 25}}>
          <Text style={styles.text}>Message</Text>
          <TextInput
            multiline={true}
            numberOfLines={6}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
            style={styles.textInput}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <View style={{width: '40%'}}>
            <GradientBtn
              name="Upload Image"
              raised
              borderRadius={5}
              onPressHandler={() => {}}
            />
          </View>
          <View style={{width: '25%'}}>
            <GradientBtn
              name="Send"
              raised
              borderRadius={5}
              onPressHandler={() => {}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {marginBottom: 10, color: colors.gray, fontSize: 16},
  textInput: {borderColor: colors.gray, borderWidth: 1, fontSize: 16},
});
export default Message;
