import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/Flights/index';
import FilterButtons from '../../components/FilterButtons';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';

const FlightScreen = ({navigation}) => {

  
  return (
    <View style={styles.container}>
      <View style ={styles.filters}>
        <FilterButtons/>
      </View>
      <View style={styles.flightlist}>
      <FlightsCard  navigation={navigation}/>
      </View>
      <LinearGradient
    colors={[config.indigo, config.eminence]}
    style={styles.footer}
    start={{x: 0, y: 1}}
    end={{x: 1, y: 0}}
  >
<TouchableOpacity style={styles.footerButtons}>
  <Text>Departure</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footerButtons}>
  <Text> Arrival</Text>
  </TouchableOpacity> 
</LinearGradient>

</View>
  )
}

export default FlightScreen;
