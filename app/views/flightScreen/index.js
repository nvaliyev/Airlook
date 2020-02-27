import React from 'react';
import {View} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/Flights/index';

const FlightScreen = () => {
  return (
    <View style={styles.container}>
      <FlightsCard />
    </View>
  );
};

export default FlightScreen;
