import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../styles/color';

function getColor(i) {
  const colors = {
    blue: '138,161,231,0.75',
    red: '239,97,122,0.75',
    green: '40,193,141,0.75',
  };

  if (i % 3 == 0) return colors.blue;

  if (i % 3 === 1) return colors.red;

  if (i % 3 === 2) return colors.green;
}

export default function CategoryCard({
  index,
  category,
  navigation,
  wrapperStyle,
}) {
  return (
    <TouchableOpacity
      style={wrapperStyle}
      onPress={() => navigation.navigate('ProductList', {category})}>
      <View>
        <ImageBackground
          source={{uri: category.photo_url}}
          imageStyle={{borderRadius: 8}}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              ...styles.textWrapper,
              backgroundColor: `rgba(${getColor(index)})`,
            }}>
            <Text style={styles.text}>{category.name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  text: {
    fontSize: 18,
    color: colors.white,
  },
});
