import {Dimensions} from 'react-native';

const {width: viewportWidth} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(45);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth - 30;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
