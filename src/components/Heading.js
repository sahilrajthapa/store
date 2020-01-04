import React from 'react';
import {Text} from 'react-native';

import {Col, Row, Grid} from 'react-native-easy-grid';

export default function Heading({
  heading,
  seeAllHandler,
  fontSize = 20,
  screen,
}) {
  return (
    <Grid>
      <Row>
        <Col size={3}>
          <Text style={{fontSize, fontWeight: '600'}}>{heading}</Text>
        </Col>
        <Col size={1}>
          {!screen && (
            <Text
              style={{textAlign: 'right', paddingTop: 7}}
              onPress={seeAllHandler}>
              See all
            </Text>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
