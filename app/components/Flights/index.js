import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import { Transition } from 'react-native-reanimated';

const FlightsCard = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.FlightDetailScreen)} style={styles.content} >
      <Text>Test</Text>
</TouchableOpacity>
  );
};
export default FlightsCard;
