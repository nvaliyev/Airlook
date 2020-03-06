import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DepartureScreen from '../../../views/departureScreen';
import ArrivalScreen from '../../../views/arrivalScreen';

const Mytabs = createBottomTabNavigator(
    {
      Departure: {
         screen: DepartureScreen},
      Arrival: { 
        screen: ArrivalScreen},
    },
   
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      
      },
    },
    {
      initialRouteName:'Departure'
    },
  );
  export default Mytabs;