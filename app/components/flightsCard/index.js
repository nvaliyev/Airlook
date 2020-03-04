import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import images from '../../servises/constans/images';

const FlightsCard = ({ navigation, city, time, info, flight }) => {

  const toDetail = () => navigation.navigate(ROUTES.FlightDetailScreen)

  return (
    <TouchableOpacity onPress={toDetail} style={styles.content} >
      <View style={styles.top}>
        <View style={styles.cityView}>
          {images.belavia}
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
