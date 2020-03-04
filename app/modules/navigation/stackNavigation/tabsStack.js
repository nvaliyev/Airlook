import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import TabScreen from '../tabNavigation';
import DepartureScreen from '../../../views/departureScreen';
import ArrivalScreen from '../../../views/arrivalScreen';
import NavigationOptions from './style';

const TabsStack = createStackNavigator(
  {
    DepartureScreen: {
      screen: DepartureScreen,
      navigationOptions: () => ({
        title: 'DepartureScreen',
        headerShown: false,
        ...NavigationOptions,
      }),
    },
    ArrivalScreen: {
      screen: ArrivalScreen,
      navigationOptions: () => ({
        title: 'ArrivalScreen',
        headerShown: false,
        ...NavigationOptions,
      }),
    },

  },
  {initialRouteName:ROUTES.DepartureScreen}
);

export default TabsStack;
