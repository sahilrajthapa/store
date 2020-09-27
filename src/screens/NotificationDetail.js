import React, {Component} from 'react';
import {View, ToastAndroid, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Notification from '../components/Notification';
import MessageForm from '../components/MessageForm';
import GradientBtn from '../components/GradientBtn';

import {
  toggleForm,
  updateFormField,
  resetForm,
  postNotificationMessageRequest,
} from '../actions/notifications';

class NotificationDetail extends Component {
  handleInputChange = message => {
    this.props.updateFormField({name: 'message', value: message});
  };

  handleChoosePhoto = () => {
    const options = {
      skipBackup: true,
      path: 'images',
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.props.updateFormField({name: 'photo', value: response});
      }
    });
  };

  handleMessageSubmission = () => {
    const {
      props: {
        navigation,
        form: {message, photo},
        postNotificationMessageRequest,
      },
    } = this;
    const notification = navigation.getParam('notification');

    if (!message) {
      return ToastAndroid.show('Please add message!', ToastAndroid.SHORT);
    }

    if (!photo) {
      return ToastAndroid.show('Please add photo!', ToastAndroid.SHORT);
    }

    postNotificationMessageRequest({
      message,
      notification: notification.id,
      photo: photo.data,
    });
  };
  _renderItem = () => {
    const {navigation} = this.props;
    const notification = navigation.getParam('notification');
    const notificationType = navigation.getParam('type');
    return (
      <Notification
        notification={notification}
        notificationType={notificationType}
        detailPage
      />
    );
  };

  render() {
    const {
      props: {
        navigation,
        form: {show, message, photo},
        toggleForm,
      },
      handleInputChange,
      handleChoosePhoto,
      handleMessageSubmission,
    } = this;
    const notificationType = navigation.getParam('type');
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading={notificationType} fontSize={30} screen />
          <View style={styles.cardWrapper}>{this._renderItem()}</View>
          <GradientBtn
            name={show ? 'Ignore' : 'Respond'}
            raised
            borderRadius={5}
            onPressHandler={toggleForm}
          />
          {show && (
            <MessageForm
              title="Message"
              message={message}
              photo={photo}
              handleInputChange={handleInputChange}
              handleChoosePhoto={handleChoosePhoto}
              handleMessageSubmission={handleMessageSubmission}
            />
          )}
        </Section>
      </ContainerView>
    );
  }

  componentWillUnmount() {
    this.props.resetForm();
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

const mapStateToProps = state => {
  const {
    notifications: {form},
  } = state;
  return {
    form,
  };
};
export default connect(
  mapStateToProps,
  {toggleForm, updateFormField, resetForm, postNotificationMessageRequest},
)(NotificationDetail);
