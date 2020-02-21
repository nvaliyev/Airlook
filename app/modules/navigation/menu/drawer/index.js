import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Settings from '../../../../views/settingScreen';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import FlightScreen from '../../../../views/flightScreen';
import SettingScreen from '../../../../views/settingScreen';


 const DrawerMenu = createDrawerNavigator(
  {
  Flights: {
    screen: FlightScreen,
    navigationOptions: {
      drawerLabel: 'Flights',
    },
  },
  Settings: {
    //Title
    screen: SettingScreen,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
}}
)
 export default createAppContainer(DrawerMenu)

  