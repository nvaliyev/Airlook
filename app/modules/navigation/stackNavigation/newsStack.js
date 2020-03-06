import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';
import NewsScreen from '../../../views/newsScreen';
import GoBack from '../../../components/goBackButton';


const NewsStack = createStackNavigator(
  {
    NewsScreen: {
      screen: NewsScreen,
      navigationOptions: ({navigation}) => ({
        ...NavigationOptions,
        headerLeft:()=> <GoBack navigation={navigation}/>
      }),
    },
    Detail: {
      screen: NewsDetailScreen,
      title: ROUTES.NewsDetailScreen,
      navigationOptions: ({navigation}) => ({
        ...NavigationOptions,
        headerLeft:()=> <GoBack navigation={navigation}/>
      }),
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'NewsScreen',
  },
);

export default NewsStack;
