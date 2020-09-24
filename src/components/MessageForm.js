import React, {Component} from 'react';

import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

import GradientBtn from './GradientBtn';

import colors from '../styles/color';

class MessageForm extends Component {
  render() {
    const {
      title,
      message,
      photo,
      handleInputChange,
      handleChoosePhoto,
      handleMessageSubmission,
    } = this.props;
    return (
      <View style={{marginBottom: 25}}>
        <View style={{marginTop: 35, marginBottom: 25}}>
          <Text style={styles.text}>{title}</Text>
          <TextInput
            multiline={true}
            numberOfLines={6}
            onChangeText={handleInputChange}
            value={message}
            style={styles.textInput}
          />
        </View>
        {photo && (
          <View style={{marginBottom: 20}}>
            <Image
              source={{uri: photo.uri}}
              style={{width: '100%', height: 300}}
            />
          </View>
        )}

        <View style={styles.buttonWrapper}>
          <View style={{width: '40%'}}>
            <GradientBtn
              name="Upload Image"
              raised
              borderRadius={5}
              onPressHandler={handleChoosePhoto}
            />
          </View>
          <View style={{width: '25%'}}>
            <GradientBtn
              name="Send"
              raised
              borderRadius={5}
              onPressHandler={handleMessageSubmission}
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

export default MessageForm;
