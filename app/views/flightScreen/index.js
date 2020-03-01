import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/Flights/index';
import FilterButtons from '../../components/FilterButtons';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import FooterButtons from '../../components/FooterButtons';
import iEntypo from '../../servises/constans/Icons/Entypo';

const FlightScreen = ({navigation}) => {

  
  return (
    <View style={styles.container}>
      <View style ={styles.filters}>
        <FilterButtons/>
      </View>
      <View style={styles.flightlist}>
      <FlightsCard  navigation={navigation} time={'14:03'} city={'Kiev'} info={'Boarding Completed'} flight={'LO 752(D)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>

      </View>
      <LinearGradient
    colors={[config.indigo, config.eminence]}
    style={styles.footer}
    start={{x: 0, y: 1}}
    end={{x: 1, y: 0}}
  >
    <FooterButtons  text={'Departure'}  ico={iEntypo.aircraftof} />
<FooterButtons  text={'Arrival'} ico={iEntypo.aircraftland}/>
    </LinearGradient>
</View>
  )
}

export default FlightScreen;
