import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {StackActions, NavigationActions} from 'react-navigation';

import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import BestSell from '../components/BestSell';

import {getDashboardDataRequest} from '../actions/home';

import {
  searchProductRequest,
  handleSearchTextChange,
} from '../actions/products';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Login'})],
});

class Home extends Component {
  componentDidMount() {
    this.props.getDashboardDataRequest();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid,
    );
  }

  handleBackButtonPressAndroid = () => {
    if (!this.props.navigation.isFocused()) {
      // The screen is not focused, so don't do anything
      return false;
    }

    this.props.navigation.dispatch(resetAction);
    return true;
  };

  handleProductSearch = () => {
    this.props.searchProductRequest();
  };

  render() {
    const {
      navigation,
      categories,
      featuredItems,
      bestSellItems,
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
              <Slider />
              <Categories
                categories={categories}
                seeAllHandler={() => navigation.navigate('Categories')}
              />
              <Featured
                featuredItems={featuredItems}
                seeAllHandler={() => navigation.navigate('ProductList')}
                navigation={navigation}
              />
              <BestSell
                bestSellItems={bestSellItems}
                seeAllHandler={() => navigation.navigate('ProductList')}
                navigation={navigation}
              />
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
  return {
    requesting: state.home.getDashboardDataRequest,
    searchText: state.products.searchText,
    isSearching: state.products.searchProductRequest,
    categories: state.home.categories,
    featuredItems: state.home.featuredItems,
    bestSellItems: state.home.bestSellItems,
  };
};

export default connect(mapStateToProps, {
  getDashboardDataRequest,
  searchProductRequest,
  handleSearchTextChange,
})(Home);
