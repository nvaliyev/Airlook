import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import images from '../../../servises/constans/images';
import config from '../../../servises/utils';
const FlightDetailScreen = () => {
  return (
    <View style={styles.container} >

      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginHorizontal: 2, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {images.belaviabig}
          <Text style={{ fontSize: 14 }}>Belavia Airlines</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
          <Text style={{ fontSize: 14, margin: 3, marginHorizontal: 5 }}>Flight</Text>
          <View style={{ backgroundColor: config.lilac, borderRadius: 3, }}>
            <Text style={{ fontSize: 14, margin: 3, marginHorizontal: 5 }}>LO 752 (D)</Text>
          </View>
        </View>
        <View style={{paddingVertical: 15 }}>
          <Text style={{ fontSize: 33, marginHorizontal: 5, fontWeight: 'bold' }}>Kiev-Baku</Text>
        </View>

        <View style={{  flexDirection: 'row',paddingTop:15,paddingHorizontal:15,flexWrap:'wrap',justifyContent:'center'}}>

          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Date</Text>
                <Text style={{fontSize:25,fontWeight:'bold'}}>18.2.2020</Text>
          </View>
          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Time</Text>
                <Text style={{fontSize:25,fontWeight:'bold'}}>02:05</Text>
          </View>
          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Terminal</Text>
                <Text style={{fontSize:25,fontWeight:'bold'}}>D</Text>
          </View>
          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Gate</Text>
                <Text style={{fontSize:25,fontWeight:'bold'}}>F4</Text>
          </View>
        </View>
      </View>


    </View>
  );
};

export default FlightDetailScreen
