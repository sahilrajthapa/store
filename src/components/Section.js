import React from 'react';
import {View} from 'react-native';

export default function Section({children, marginTop = 30, propStyle}) {
  return <View style={{marginTop, ...propStyle}}>{children}</View>;
}
