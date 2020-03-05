import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import { DrawerMenu, Navigationdraw } from '../drawNavigation/';
import ArrivalScreen from '../../../views/arrivalScreen';
import SettingScreen from '../../../views/settingScreen';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';
import NewsScreen from '../../../views/newsScreen';
import Authstack from './authStackNavigation';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';

const AppFlow = createStackNavigator(
  {
   Main: {
      screen: DrawerMenu,
      navigationOptions:{
          headerShown:false
      }
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
      auth: {
        screen: LoginOrRegister,
        navigationOptions: () => ({
          title: ROUTES.LoginOrRegister,
          headerShown: false,
          ...NavigationOptions,
        }),
      },
  },
  {
    initialRouteName: 'Main',
  },
);

export default AppFlow;
