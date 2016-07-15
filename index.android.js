/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PlacarContainer from './components/PlacarContainer'

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

class trucoCounter extends Component {
  render() {
    return (
      <View>
      <PlacarContainer {...dados} />
      </View>
    );
  }
}

AppRegistry.registerComponent('trucoCounter', () => trucoCounter);
