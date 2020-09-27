import React, {Component} from 'react';
import {ToastAndroid, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import colors from '../styles/color';
import UserImage from '../components/UserImage';
import UserInfo from '../components/UserInfo';
import MessageForm from '../components/MessageForm';
import GradientBtn from '../components/GradientBtn';
import {
  toggleForm,
  updateFormField,
  resetForm,
  postMessageRequest,
} from '../actions/contacts';

class VeterinarianDetail extends Component {
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
        postMessageRequest,
      },
    } = this;
    const contact = navigation.getParam('contact');

    if (!message) {
      return ToastAndroid.show('Please add query!', ToastAndroid.SHORT);
    }

    if (!photo) {
      return ToastAndroid.show('Please add photo!', ToastAndroid.SHORT);
    }

    postMessageRequest({
      query: message,
      to: contact.id,
      photo: photo.data,
    });
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
    const contact = navigation.getParam('contact');
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Veterinarian" fontSize={30} screen />
          <UserImage uri={contact.user.photo_url} />
          <UserInfo label="Name" value={contact.user.username} />
          <UserInfo label="Speciality" value="" />
          <GradientBtn
            name={show ? 'Ignore' : 'Respond'}
            raised
            borderRadius={5}
            onPressHandler={toggleForm}
          />
          {show && (
            <MessageForm
              title="Queries"
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
    width: '100%',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 7,
    marginBottom: 10,
  },
});

const mapStateToProps = state => {
  const {
    contacts: {form},
  } = state;
  return {
    form,
  };
};
export default connect(
  mapStateToProps,
  {toggleForm, resetForm, updateFormField, postMessageRequest},
)(VeterinarianDetail);
