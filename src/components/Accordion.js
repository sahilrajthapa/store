import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../styles/color';
import {Icon} from 'react-native-elements';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.row} onPress={this.toggleExpand}>
          <Icon
            color="#111"
            name={this.state.expanded ? 'remove' : 'add'}
            size={24}
          />
          <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  parentHr: {
    height: 2,
    backgroundColor: colors.lightGray,
    width: '100%',
  },
  child: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: colors.lightGray,
    borderBottomWidth: 2,
  },
});
