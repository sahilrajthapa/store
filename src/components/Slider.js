import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {Button} from 'react-native-elements';
import colors from '../styles/color';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?hen',
        'https://source.unsplash.com/1024x768/?goat',
        'https://source.unsplash.com/1024x768/?cow',
      ],
    };
  }

  render() {
    return (
      <View style={styles.sliderWrapper}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={225}
          // onCurrentImagePressed={index =>
          //   console.warn(`image ${index} pressed`)
          // }
          autoplay
          dotColor="#6582E9"
          inactiveDotColor="#90A4AE"
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            left: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
          }}
        />

        <Grid
          style={{
            position: 'absolute',
          }}>
          <Col></Col>
          <Col>
            <Row>
              <View style={{marginTop: 40}}>
                <Text style={styles.sliderText}>How toRaise</Text>
                <Text style={styles.sliderText}>a Chicken!</Text>
              </View>
            </Row>
            <Row>
              <View style={styles.buttonWrapper}>
                <Button title="DISCOVER" raised buttonStyle={styles.button} />
              </View>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderWrapper: {
    overflow: 'hidden',
    marginTop: 30,
  },
  sliderText: {
    color: colors.white,
    fontSize: 24,
  },
  buttonWrapper: {marginLeft: 50, marginTop: 50},
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#83C025',
  },
});
