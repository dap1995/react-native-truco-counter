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
        <Text style={{textAlign: 'center', fontSize: 60,  backgroundColor: '#8c6cff'}}>{this.props.estadio}</Text>
        <View>
          <Text style={{textAlign: 'center', fontSize: 50, backgroundColor: '#8c6cff'}}>{this.props.data}</Text>
        </View>
      </View>
    );
  }
}
