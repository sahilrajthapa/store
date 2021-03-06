import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-native-easy-grid';

import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import BestSell from '../components/BestSell';

import {getDashboardDataRequest} from '../actions/home';
import {getCustomersRequest} from '../actions/customers';
import {getInformationRequest} from '../actions/notifications';
import {
  searchProductRequest,
  handleSearchTextChange,
} from '../actions/products';

class Home extends Component {
  _isMounted = false;

  shouldComponentUpdate(nextProps) {
    if (!nextProps.navigation.isFocused()) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    if (this.props.navigation.isFocused()) {
      this._isMounted = true;
    }
    this.props.getDashboardDataRequest();
    // this.props.getCustomersRequest();
    this.props.getInformationRequest({
      filter_type: 0,
      selected: 1,
      per_page: 3,
    });

    this.willFocusListener = this.props.navigation.addListener(
      'willFocus',
      () => {
        this._isMounted && this.forceUpdate();
      },
    );
  }

  handleProductSearch = () => {
    this.props.searchProductRequest();
  };

  componentWillUnmount() {
    this._isMounted = false;
    this.willFocusListener && this.willFocusListener.remove();
  }

  render() {
    const {
      navigation,
      categories,
      featuredItems,
      bestSellItems,
      information,
      requesting,
      isSearching,
      searchText,
      handleSearchTextChange,
      searchProductRequest,
    } = this.props;

    if (requesting || isSearching) {
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ContainerView navigation={navigation}>
        <Grid>
          <Row style={styles.mainWrapper} size={100}>
            <Col>
              <SearchBar
                searchText={searchText}
                handleSearchTextChange={handleSearchTextChange}
                searchProductRequest={searchProductRequest}
              />
              {information.length > 0 && (
                <Slider information={information} navigation={navigation} />
              )}
              {categories.length > 0 && (
                <Categories categories={categories} navigation={navigation} />
              )}
              {featuredItems.length > 0 && (
                <Featured
                  featuredItems={featuredItems}
                  navigation={navigation}
                />
              )}
              {bestSellItems.length > 0 && (
                <BestSell
                  bestSellItems={bestSellItems}
                  navigation={navigation}
                />
              )}
            </Col>
          </Row>
        </Grid>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    // padding: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const mapStateToProps = state => {
  const {
    home: {
      getDashboardDataRequest: requesting,
      categories,
      featuredItems,
      bestSellItems,
    },
    products: {searchText, searchProductRequest: isSearching},
    notifications: {sliderInformation: information},
  } = state;
  return {
    requesting,
    searchText,
    isSearching,
    categories,
    featuredItems,
    bestSellItems,
    information,
  };
};

export default connect(
  mapStateToProps,
  {
    getDashboardDataRequest,
    getCustomersRequest,
    getInformationRequest,
    searchProductRequest,
    handleSearchTextChange,
  },
)(Home);
