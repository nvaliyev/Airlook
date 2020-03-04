import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import ROUTES from '../../servises/routes/';
import Appstack from './stackNavigation/appstacknavigator';
import Authstack from './stackNavigation/authStackNavigation';
import LaunchScreen from '../../views/launchScreen';
const SwitchNavigator = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      loading:LaunchScreen,
      app:Appstack,
      auth:Authstack,
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
