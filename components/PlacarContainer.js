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
    const { partida, time1, time2 } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Time nome={time1.nome}>
      </Time>
      <Partida {...partida}>
      </Partida>
      <Time nome={time2.nome}>
      </Time>
      </View>
    );
  }

}
