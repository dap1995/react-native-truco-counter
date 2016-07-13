import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Botao from './Botao';

export default class Time extends Component {

  constructor(props){
    super(props);
    this.state = {
      pontos: 0,
    };
  }

  marcarPontos(){
    this.setState({
      pontos: this.state.pontos + 1,
    });
  }

  render(){
    return (
      <View>
      <Text style={{fontSize: 45}}>{this.props.nome}</Text>
      <Text style={{fontSize: 25}}>{this.state.pontos}</Text>
      <Botao marcarPontos={this.marcarPontos.bind(this)} />
      </View>
    );
  }
}
