import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from '../stackNavigation/style';
import { DrawerMenu, Navigationdraw } from '../drawNavigation';
import ArrivalScreen from '../../../views/arrivalScreen';

const ArrivalStack = createStackNavigator(
  {
   Arrival: {
      screen: ArrivalScreen,
      navigationOptions: ({ navigation }) => ({
        title: ROUTES.ArrivalScreen,
        headerLeft: () => <Navigationdraw navigation={navigation}/>,
        ...NavigationOptions,
      })
    },
    Detail: {
      screen: ArrivalScreen,
      navigationOptions: () => ({
        title: ROUTES.ArrivalDetailScreen,
        ...NavigationOptions,
      }),
    },
  },
  {
    initialRouteName: 'Arrival',
  },
);

export default ArrivalStack;
