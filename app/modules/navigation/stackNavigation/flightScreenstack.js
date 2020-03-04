import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import { DrawerMenu, Navigationdraw } from '../drawNavigation/';
import FlightDetailScreen from '../../../views/flightScreen/detailscreen/index';
import FlightScreen from '../../../views/flightScreen';
import DepartureScreen from '../../../views/departureScreen';
import ArrivalScreen from '../../../views/arrivalScreen';

const FlightStack = createStackNavigator(
  {
   Departure: {
      screen: DepartureScreen,
      navigationOptions: ({ navigation }) => ({
        title: ROUTES.DepartureScreen,
        headerLeft: () => <Navigationdraw navigation={navigation}/>,
        ...NavigationOptions,
      })
    },
    Arrival: {
      screen: ArrivalScreen,
      navigationOptions: () => ({
        title: ROUTES.ArrivalScreen,
        ...NavigationOptions,
      }),
    },
  },
  {
    initialRouteName: 'Departure',
  },
);

export default FlightStack;
