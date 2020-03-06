import React from 'react';
import {  Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerContent from '../../../components/sidebar';
import AppFlow from '../stackNavigation/appFlow';



const DrawerMenu = createDrawerNavigator(
  {
    Home:AppFlow
  },
  {
    drawerWidth: Dimensions.get('window').width - 70,
    contentComponent: ({ navigation }) => (
      <DrawerContent navigation={navigation} />
    ),
  },
);
export default DrawerMenu