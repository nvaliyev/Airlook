import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import { Navigationdraw } from '../drawNavigation/';
import DepartureScreen from '../../../views/departureScreen';
import DepartureDetailScreen from '../../../views/departureScreen/detailScreen';

const DepartureStack = createStackNavigator(
  {
   Departure: {
      screen: DepartureScreen,
      navigationOptions: ({ navigation }) => ({
        title: ROUTES.DepartureScreen,
        headerLeft: () => <Navigationdraw navigation={navigation}/>,
        ...NavigationOptions,
      })
    },
    Detail: {
      screen: DepartureDetailScreen,
      navigationOptions: () => ({
        title: ROUTES.DepartureDetailScreen,
        ...NavigationOptions,
      }),
    },
  },
  {
    initialRouteName: 'Departure',
  },
);

export default DepartureStack;
