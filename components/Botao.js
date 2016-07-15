import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

export default class Botao extends Component {

  render(){
    return (
      <View>
      <TouchableHighlight onPress={() => this.props.executaPontos()}>
      <Text style={{fontSize: 45, backgroundColor: '#96dafb', fontWeight: 'bold', textAlign: 'center'}}>{this.props.text}</Text>
      </TouchableHighlight>
      </View>
    );
  }
}
