import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Notification from '../components/Notification';
import MessageForm from '../components/MessageForm';
import GradientBtn from '../components/GradientBtn';

export default class NotificationDetail extends Component {
  state = {showForm: false};

  toggleShowForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  _renderItem = () => {
    const {navigation} = this.props;
    const notification = navigation.getParam('notification');

    return <Notification notification={notification} detailPage />;
  };

  render() {
    const {
      props: {navigation},
      state: {showForm},
      toggleShowForm,
    } = this;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Notification" fontSize={30} screen />
          <View style={styles.cardWrapper}>{this._renderItem()}</View>
          <GradientBtn
            name={showForm ? 'Ignore' : 'Respond'}
            raised
            borderRadius={5}
            onPressHandler={toggleShowForm}
          />
          {showForm && <MessageForm title="Message" />}
        </Section>
      </ContainerView>
    );
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
