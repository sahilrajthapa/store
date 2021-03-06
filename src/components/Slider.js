import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import colors from '../styles/color';

const slideWidth = parseInt(Dimensions.get('window').width - 40);

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.information,
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
    this._isMounted = false;
  }

  setSelectedIndex = event => {
    // width of the viewSize
    const viewSize = parseInt(event.nativeEvent.layoutMeasurement.width);

    // get current position of the scrollview
    const contentOffset = parseInt(event.nativeEvent.contentOffset.x);

    const selectedIndex = Math.ceil(contentOffset / viewSize);
    this.setState({selectedIndex});
  };

  autoScroll = () => {
    setInterval(() => {
      if (this._isMounted) {
        this.setState(
          prevState => ({
            selectedIndex:
              prevState.slides.length - 1 === prevState.selectedIndex
                ? 0
                : prevState.selectedIndex + 1,
          }),
          () => {
            this.scrollRef.current.scrollTo({
              animated: true,
              y: 0,
              x: slideWidth * this.state.selectedIndex,
            });
          },
        );
      }
    }, 3000);
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.information !== this.props.information) {
      this.setState(
        {
          slides: this.props.information,
        },
        this.autoScroll,
      );
    }
  }

  render() {
    const {
      props: {navigation},
      state: {slides, selectedIndex},
      setSelectedIndex,
      scrollRef,
    } = this;

    return (
      <View style={styles.sliderWrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={setSelectedIndex}
          ref={scrollRef}>
          {slides.map(slide => (
            <View key={slide.id}>
              <Image
                source={{uri: slide.photo}}
                style={{width: slideWidth, height: 220}}
              />

              <View style={[styles.overlay, styles.rightContent]}>
                <View style={styles.textWrapper}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      color: colors.white,
                      fontSize: 24,
                    }}>
                    {slide.title}
                  </Text>
                  <View style={{alignSelf: 'center'}}>
                    <TouchableHighlight
                      style={{
                        height: 40,
                        width: 100,
                      }}
                      onPress={() => {
                        navigation.navigate('NotificationDetail', {
                          notification: slide,
                          type: 'information',
                        });
                      }}>
                      <Text
                        style={{
                          backgroundColor: '#83C025',
                          textAlign: 'center',
                          lineHeight: 40,
                          color: colors.white,
                          // justifyContent: 'center',
                          // alignItems: 'center',
                          height: '100%',
                          width: '100%',
                        }}>
                        Read More
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>

              <View style={styles.dotWrapper}>
                {slides.map((slide, i) => (
                  <View
                    key={slide.id}
                    style={{
                      ...styles.dot,
                      ...(selectedIndex === i && {
                        backgroundColor: '#6582E9',
                      }),
                    }}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

const styles = StyleSheet.create({
  sliderWrapper: {
    marginTop: 30,
  },
  sliderText: {
    color: colors.white,
    fontSize: 24,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  rightContent: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    height: '90%',
  },
  dotWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: colors.white,
    borderRadius: 100,
    height: 10,
    width: 10,
    marginRight: 7,
  },
});
