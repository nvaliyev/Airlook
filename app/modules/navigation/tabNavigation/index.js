import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DepartureScreen from '../../../views/departureScreen';
import ArrivalScreen from '../../../views/arrivalScreen';
import Tabs from '../../../components/tabBar';

const Mytabs = createBottomTabNavigator(
    {
      Departure: {
         screen: DepartureScreen,
        },
      Arrival: { 
        screen: ArrivalScreen,
      },
    },
    {
      tabBarComponent:({navigation}) => <Tabs navigation={navigation}/>,
      initialRouteName:'Departure',
      tabBarPosition: 'bottom',
      
    },

  );
  export default Mytabs;