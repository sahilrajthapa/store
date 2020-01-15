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
        source={require('vetproject/src/static/img/vet2.jpg')}
        style={{width: 125, height: 125, borderRadius: 125}}
      />
    </View>
  );
}
