import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import LaunchScreen from '../../views/launchScreen';
import { DrawerMenu } from './drawNavigation';
import Authstack  from './stackNavigation/appFlow';

const SwitchNavigator = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      loading:LaunchScreen,
      auth:Authstack,
      app:DrawerMenu,
    },
    {
      initialRouteName: 'loading',
      transition: (
        <Transition.Together>
          <Transition.Out type="fade" durationMs={650} />
          <Transition.In type='scale' durationMs={600} />
        </Transition.Together>
      ),
    },
  ),
);

export default SwitchNavigator;
