
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import DrawerButton from '../../../components/drawerButton';
import Mytabs from '../tabNavigation';
import NewsStack from './newsStack';
import SettingScreen from '../../../views/settingScreen';
import DrawerMenu from '../drawNavigation';

const MainStack = createStackNavigator(
    {
     Flight: {
        screen:DrawerMenu ,
        navigationOptions: () => ({
        })
      },
      Settings: {
        screen: SettingScreen,
        title: ROUTES.SettingScreen,
        navigationOptions: () => ({
          ...NavigationOptions,
        }),
      },
      News:{
       screen: NewsStack,
        title: 'News',
        navigationOptions: () => ({
          ...NavigationOptions,
      })
    },
  },
    {
      initialRouteName:'Flight',
      headerMode:false 
  },

  );
  
  export default MainStack;
  