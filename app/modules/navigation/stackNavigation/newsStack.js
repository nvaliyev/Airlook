import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import { Navigationdraw } from '../drawNavigation/';
import SettingScreen from '../../../views/settingScreen';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';
import NewsScreen from '../../../views/newsScreen';
import DrawerMenu from '../drawNavigation'
import Mytabs from '../tabNavigation';
import FlightDetailScreen from '../../../views/flightDetailScreen';



const NewsStack = createStackNavigator(
  {
    NewsScreen: {
      screen: NewsScreen,
      title: ROUTES.NewsScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
    NewsDetailScreen: {
      screen: NewsDetailScreen,
      title: ROUTES.NewsDetailScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'NewsScreen',
  },
);

export default AppFlow;
