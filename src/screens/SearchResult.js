import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';

import Card from '../components/Card';

class SearchResult extends Component {
  _renderItem = (item, index) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {product: item})}
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
    const {navigation, products} = this.props;

    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Results" fontSize={30} screen />
          <View style={styles.cardWrapper}>
            {products.length > 0 ? (
              products.map(this._renderItem)
            ) : (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}>
                <Text style={{fontSize: 18}}>No results found.</Text>
              </View>
            )}
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
    products: state.products.searchedProducts,
  };
};

export default connect(mapStateToProps, null)(SearchResult);
