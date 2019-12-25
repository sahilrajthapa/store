import React from 'react';
import {View, ScrollView} from 'react-native';

export default function HorizontalScroll({children}) {
  return <ScrollView horizontal={true}>{children}</ScrollView>;
}
