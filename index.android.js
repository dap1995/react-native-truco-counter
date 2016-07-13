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
    estadio: "Casa do joao",
    data: "01/08/2016",
  },
  time1: {
    nome: "Jorge",
  },
  time2: {
    nome: "Francisco",
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
