import React from 'react';
import {Text} from 'react-native';

import {Col, Row, Grid} from 'react-native-easy-grid';

export default function Header({heading}) {
  return (
    <Grid>
      <Row>
        <Col size={3}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>{heading}</Text>
        </Col>
        <Col size={1}>
          <Text style={{textAlign: 'right', paddingTop: 7}}>See all</Text>
        </Col>
      </Row>
    </Grid>
  );
}
