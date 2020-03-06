import React from 'react';
import {View,ScrollView} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/flightsCard/index';
import FilterButtons from '../../components/FilterButtons';

const ArrivalScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style ={styles.filters}>
        <FilterButtons/>
      </View>
      <View style={styles.flightlist}>
  <ScrollView style={styles.scroll}>
      <FlightsCard  navigation={navigation} time={'14:03'} city={'Kiev'} info={'Boarding Completed'} flight={'LO 752(D)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 07:25'} flight={'AR 7071(M)'}/>
      <FlightsCard  navigation={navigation} time={'08:00'} city={'Berlin'} info={'Take Off at 06:25'} flight={'PQ 7001(D)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Hovsan'} info={'Take Off at 00:45'} flight={'PA 731(L)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Tibilisi'} info={'Take Off at 00:25'} flight={'PQ 7091(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Moskow'} info={'Completed'} flight={'PQ 7095(A)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Khachmaz'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Yasamal'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Azadliq'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
</ScrollView>
      </View>
</View>
  )
}
export default ArrivalScreen;
