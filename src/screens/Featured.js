import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Card from '../components/Card';

class Featured extends Component {
  _renderItem = (item, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        key={index}
        style={{width: '48%'}}>
        <Card
          index={index}
          uri={item.photo_url}
          title={item.name}
          wrapperStyle={{width: '100%'}}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {navigation, featuredItems} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Featured" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {featuredItems.map(this._renderItem)}
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
    width: '100%',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    featuredItems: state.home.featuredItems,
  };
};

export default connect(mapStateToProps, null)(Featured);
