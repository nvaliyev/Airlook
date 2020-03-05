import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DepartureStack from '../flightStack/departureStack';
import ArrivalStack from '../flightStack/arrivalStack';

const Mytabs = createBottomTabNavigator(
    {
      Departure: {
         screen: DepartureStack },
      Arrival: { 
        screen: ArrivalStack },
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