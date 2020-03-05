import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import NewsScreen from '../../../views/newsScreen';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';

const NewsStack = createStackNavigator({
    
    News: {
      screen: NewsScreen,
      title: ROUTES.NewsScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
    Detail: {
      screen: NewsDetailScreen,
      title: ROUTES.NewsDetailScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
   
  },
  {initialRouteName:'News'}
);

export default NewsStack;

