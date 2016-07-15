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

  diminuirPontos(){
    this.setState({
      pontos: this.state.pontos - 1,
    });
  }

  render(){
    return (
      <View>
      <Text style={{fontSize: 65, textAlign: 'center'}}>{this.props.nome}</Text>
      <View style={{alignSelf: 'center',backgroundColor: '#1dffd7', borderRadius: 45, borderWidth: 1, width: 85, height: 85, margin: 5, borderColor: '#1dffd7'}}>
      <Text style={{fontSize: 65, textAlign: 'center'}}>{this.state.pontos}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
      <View style={{flex: 0.5}}>
      <Botao executaPontos={this.diminuirPontos.bind(this)} text='-' />
      </View>
      <View style={{flex: 0.5}}>
      <Botao executaPontos={this.marcarPontos.bind(this)} text='+' />
      </View>
      </View>
      </View>
    );
  }
}
