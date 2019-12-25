import React from 'react';
import {View} from 'react-native';

export default function Section({children, marginTop = 30}) {
  return <View style={{marginTop}}>{children}</View>;
}
