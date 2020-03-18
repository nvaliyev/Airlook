import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import config from '../../servises/utils';
const FlightDetailScreen = ({navigation}) => {
  console.log("data-->>>>",navigation.getParam('data'))


  const data = navigation.getParam('data')




  return (
    <View style={styles.container} >

      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginHorizontal: 2, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image source={{uri:data.logo}} style={{width:170,height:90,resizeMode:'contain'}} />
          <Text style={{ fontSize: 14 }}>{data.airline} Airlines</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
          <Text style={{ fontSize: 14, margin: 3, marginHorizontal: 5 }}>Flight</Text>
          <View style={{ backgroundColor: config.lilac, borderRadius: 3, }}>
  <Text style={{ fontSize: 14, margin: 3, marginHorizontal: 5 }}>{data.flight}</Text>
          </View>
        </View>
        <View style={{paddingVertical: 15 }}>
          <Text style={{ fontSize: 33, marginHorizontal: 5, fontWeight: 'bold' }}>{data.cityDetail}</Text>
        </View>

        <View style={{  flexDirection: 'row',paddingTop:15,paddingHorizontal:15,flexWrap:'wrap',justifyContent:'center'}}>

          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Date</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{data.date}</Text>
          </View>
          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Time</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{data.time}</Text>
          </View>
          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Terminal</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{data.terminal}</Text>
          </View>
          <View style={{ flexDirection: 'column',alignItems:'center',marginHorizontal:10}}>
                <Text style={{fontSize:15,color:'grey'}}>Gate</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{data.gate}</Text>
          </View>
        </View>
      </View>


    </View>
  );
};

export default FlightDetailScreen
