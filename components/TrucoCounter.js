import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PlacarContainer from './PlacarContainer'

const dados = {
  partida: {
    estadio: "Truco - Placar",
    data: "13/07/2016",
  },
  time1: {
    nome: "Nós",
  },
  time2: {
    nome: "Eles",
  }
};

export default class trucoCounter extends Component {
  render() {
    return (
      <View>
      <PlacarContainer {...dados} />
      </View>
    );
  }
}
