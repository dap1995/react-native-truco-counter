import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Time nome={this.props.time1.nome}>
      </Time>
      <Partida estadio={this.props.partida.estadio}>
      </Partida>
      <Time nome={this.props.time2.nome}>
      </Time>
      </View>
    );
  }

}
