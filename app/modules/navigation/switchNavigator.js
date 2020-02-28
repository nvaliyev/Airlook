import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import ROUTES from '../../servises/routes/';
import Appstack from './stackNavigation/appstackNavigation';
import LaunchScreen from '../../views/launchScreen';

const SwitchNavigator = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      LaunchScreen,
      Appstack,
    },
    {
      initialRouteName: ROUTES.LaunchScreen,
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
