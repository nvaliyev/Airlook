import React from 'react';
import {View,ScrollView} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/flightsCard/index';
import FilterButtons from '../../components/filterButtons';
import images from '../../servises/constans/images';

const DepartureScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style ={styles.filters}>
        <FilterButtons/>
      </View>
      <View style={styles.flightlist}>

      <FlatList  
                    data={[  
                        {time:'14:03',info:'Boarding Completed',flight:'LO 752(D)',city:'Baku'}   
                        
                    ]}  
                    renderItem={({item}) =>  
                    <FlightsCard  navigation={navigation} time={item.time} city={item.city} info={'Boarding Completed'} flight={item.flight} />
/>
            </View>  
  <ScrollView style={styles.scroll}>
      
</ScrollView>
      </View>
</View>
  )
}

export default DepartureScreen;
