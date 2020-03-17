import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
const FlightsCard = ({ navigation, city, time, info, flight, logo,}) => {

  const toDetail = () => navigation.navigate('FlightDetail')
  return (
    <TouchableOpacity onPress={toDetail} style={styles.content} >
      <View style={styles.top}>
        <View style={styles.cityView}>
<Image source={{uri:logo}} style={{width:45,height:35,resizeMode:'contain'}} />
          <Text style={styles.cityText}>{city}</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.flightView}>
  <Text style={styles.flightText}>{flight}</Text>
        </View>
        <Text style={styles.infotext}>{info}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default FlightsCard;
