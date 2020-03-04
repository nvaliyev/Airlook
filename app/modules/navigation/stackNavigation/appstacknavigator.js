import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerMenu } from '../drawNavigation';
import FlightStack from './flightScreenstack';


const AppStack = createStackNavigator(
  {
   App:DrawerMenu,
  },
  {
      headerMode:false
  }
);
export default AppStack;
