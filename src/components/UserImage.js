import React from 'react';
import {View, Image} from 'react-native';

export default function UserImage() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
      }}>
      <Image
        source={{uri: 'https://source.unsplash.com/1024x768/?man'}}
        style={{width: 125, height: 125, borderRadius: 125}}
      />
    </View>
  );
}
