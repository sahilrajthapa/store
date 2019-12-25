import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function HeaderRight() {
  return (
    <View style={{flexDirection: 'row', paddingRight: 20}}>
      <Icon color="#a9a9a9" name={'add'} iconStyle={{paddingLeft: 7}} />
      <Icon
        color="#a9a9a9"
        name={'person-outline'}
        iconStyle={{paddingLeft: 7}}
      />
      <Icon
        color="#a9a9a9"
        name={'notifications-none'}
        iconStyle={{paddingLeft: 7}}
      />

      <Icon
        color="#a9a9a9"
        name={'shopping-cart'}
        iconStyle={{paddingLeft: 7}}
      />
    </View>
  );
}
