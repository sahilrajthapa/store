import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Notification from '../components/Notification';
import MessageForm from '../components/MessageForm';

export default class NotificationDetail extends Component {
  _renderItem = (item, index) => {
    return (
      <Notification
        index={index}
        condtn={index === 0}
        wrapperStyle={{marginTop: 15}}
        detailPage
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Notification" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {Array(1)
              .fill('')
              .map(this._renderItem)}
          </View>

          <MessageForm title="Message" />
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
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});
