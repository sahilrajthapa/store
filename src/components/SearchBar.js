import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Col, Row} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/color';

function SearchBar() {
  return (
    <View style={styles.searchWrapper}>
      <Row>
        <Col size={0.6}>
          <View style={styles.searchIconWrapper}>
            <Icon name="search" size={30} color={colors.gray} />
          </View>
        </Col>
        <Col size={3.4}>
          <View style={styles.searchTextWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Search Your Product"
              onChange={() => console.log('changed')}
            />
          </View>
        </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
    height: 50,
    marginTop: 15,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: colors.white,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },

    elevation: 5,
  },
  searchIconWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#F6F9EF',
    height: 30,
  },
  searchTextWrapper: {
    // padding: 10,
  },
  inputField: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default SearchBar;
