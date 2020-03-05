import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/flights/index';
import FilterButtons from '../../components/filterButtons';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import FooterButtons from '../../components/footerButtons';
import iEntypo from '../../servises/constans/Icons/entypo';

const FlightScreen = ({navigation}) => {

  
  return (
    <View style={styles.container}>
      <View style ={styles.filters}>
        <FilterButtons/>
      </View>
      <View style={styles.flightlist}>
        <ScrollView style={{alignSelf:'stretch'}}>
      <FlightsCard  navigation={navigation} time={'14:03'} city={'Kiev'} info={'Boarding Completed'} flight={'LO 752(D)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 07:25'} flight={'AR 7071(M)'}/>
      <FlightsCard  navigation={navigation} time={'08:00'} city={'Berlin'} info={'Take Off at 06:25'} flight={'PQ 7001(D)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Istanbul'} info={'Take Off at 00:45'} flight={'PA 731(L)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Tibilisi'} info={'Take Off at 00:25'} flight={'PQ 7091(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Moskow'} info={'Completed'} flight={'PQ 7095(A)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>
      <FlightsCard  navigation={navigation} time={'00:10'} city={'Baku'} info={'Take Off at 00:25'} flight={'PQ 7001(F)'}/>

</ScrollView>
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
