import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/color';

function SearchBar({searchText, handleSearchTextChange, searchProductRequest}) {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchIconWrapper}>
        <TouchableOpacity
          onPress={() => {
            searchProductRequest({searchText});
          }}>
          <Icon name="search" size={30} color={colors.gray} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchTextWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Search Your Product"
          value={searchText}
          onChangeText={text => handleSearchTextChange(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
    height: 50,
    marginTop: 20,
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
