import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Partida extends Component {
  render(){
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 60}}>{this.props.estadio}</Text>
        <View>
          <Text>Data</Text>
        </View>
      </View>
    );
  }
}
