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
      <TouchableHighlight onPress={() => this.props.marcarPontos()}>
      <Text style={{fontSize: 45, backgroundColor: '#ffaaaa', fontWeight: 'bold', textAlign: 'center'}}> + </Text>
      </TouchableHighlight>
      </View>
    );
  }
}
