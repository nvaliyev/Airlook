import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import { Transition } from 'react-native-reanimated';
import config from '../../servises/utils';
import images from '../../servises/constans/images';

const FlightsCard = ({navigation,city,time,info,flight}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.FlightDetailScreen)} style={styles.content} >
      
       <View style={{flex:1,flexDirection:'row',alignItems:'center',marginHorizontal:8,justifyContent:'space-between'}}>
        <View style={{marginLeft:5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        {images.belavia}
<Text style={{fontSize:24,margin:5,fontWeight:'bold'}}>{city}</Text>
      </View>
      <View style={{borderRadius:2,marginRight:15,borderWidth:1,borderColor:config.lilac}}>
      <Text style={{fontSize:14,marginHorizontal:5,fontWeight:'bold'}}>{time}</Text>
        </View>
      </View>

      <View style={{flex:1,flexDirection:'row',alignItems:'center',marginHorizontal:8,justifyContent:'space-between'}}>
        <View style={{backgroundColor:config.lilac,borderRadius:3,}}>
  <Text style={{fontSize:14,margin:3,marginHorizontal:5}}>{flight}</Text>
      </View>
      <Text style={{fontSize:14,margin:3}}>{info}</Text>
      </View>

</TouchableOpacity>
  );
};
export default FlightsCard;
