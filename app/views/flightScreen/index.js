
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './style';
import {FlightsCard} from '../../components/Flights/index'

export default class FlightScreen extends  Component {
  render() { 
    return (
<View style={styles.container}>
<FlightsCard/>
      </View>
    )
  }
}







