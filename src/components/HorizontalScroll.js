import React from 'react';
import {ScrollView} from 'react-native';

export default function HorizontalScroll({children}) {
  return <ScrollView horizontal={true}>{children}</ScrollView>;
}
