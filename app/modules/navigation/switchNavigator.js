import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import LaunchScreen from '../../views/launchScreen';
import Authstack from './stackNavigation/authStackNavigation';
import {DrawerMenu} from '../../modules/navigation/drawNavigation/index'

const SwitchNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Loading:LaunchScreen,
      Auth:Authstack,
      App:DrawerMenu,
    },
    // {
    //   initialRouteName: 'loading',
    //   transition: (
    //     <Transition.Together>
    //       <Transition.Out type="fade" durationMs={0} />
    //       <Transition.In type='slide-bottom' durationMs={300} />
    //     </Transition.Together>
    //   ),
    // },
  ),
);

export default SwitchNavigator;
