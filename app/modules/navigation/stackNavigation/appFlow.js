import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import {Navigationdraw } from '../drawNavigation/';
import SettingScreen from '../../../views/settingScreen';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';
import NewsScreen from '../../../views/newsScreen';
import Mytabs from '../tabNavigation';
import FlightDetailScreen from '../../../views/flightDetailScreen/detailscreen';

const AppFlow = createStackNavigator(
  {
   Tabs: {
      screen: Mytabs,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <Navigationdraw navigation={navigation}/>,
        ...NavigationOptions,
      }),
    },
    FlightDetail: {
      screen: FlightDetailScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
    SettingScreen: {
        screen: SettingScreen,
        title: ROUTES.SettingScreen,
        navigationOptions: () => ({
          ...NavigationOptions,
        }),
      },
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
    mode:'modal',
    initialRouteName: 'Tabs',
  },
);

export default AppFlow;
