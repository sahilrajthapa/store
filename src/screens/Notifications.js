import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Notification from '../components/Notification';
import {getNotificationsRequest} from '../actions/notifications';

class Notifications extends Component {
  componentDidMount() {
    this.props.getNotificationsRequest({fiter_type: 3});
  }

  _renderItem = (notification, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NotificationDetail', {notification});
        }}
        key={index}>
        <Notification
          wrapperStyle={index === 0 ? {marginTop: 15} : {}}
          notification={notification}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {navigation, notifications} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Notifications" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {notifications.map(this._renderItem)}
          </View>
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

const mapStateToProps = state => {
  const {
    notifications: {notifications},
  } = state;
  return {
    notifications,
  };
};

export default connect(
  mapStateToProps,
  {
    getNotificationsRequest,
  },
)(Notifications);

// export default Notifications;
