import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import SettingScreen from '../../../views/settingScreen';
import NavigationOptions from './style';
import NewsScreen from '../../../views/newsScreen';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';

const DrawerStack = createStackNavigator(
  {
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
);

export default DrawerStack;

