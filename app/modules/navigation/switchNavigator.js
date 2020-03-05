import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import Authstack from './stackNavigation/authStackNavigation';
import LaunchScreen from '../../views/launchScreen';
import AppFlow from './stackNavigation/appFlow';

const SwitchNavigator = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      loading:LaunchScreen,
      auth:Authstack,
      app:AppFlow,
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
