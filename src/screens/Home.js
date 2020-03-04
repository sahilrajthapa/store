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
    this.props.getCustomersRequest();
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
  getCustomersRequest,
  searchProductRequest,
  handleSearchTextChange,
})(Home);
