import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import LaunchScreen from '../../views/launchScreen';
import Authstack from './stackNavigation/authStackNavigation';
import DrawerMenu from '../../modules/navigation/drawNavigation/index'

const SwitchNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Loading:LaunchScreen,
      Auth:Authstack,
      App:DrawerMenu,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

export default SwitchNavigator;
