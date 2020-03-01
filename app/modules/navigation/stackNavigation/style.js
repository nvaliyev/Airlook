import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../../servises/utils';

const NavigationOptions = {
  headerBackground: () => Gradient,
  headerStyle: {
    height: 60,
  },
  headerTintColor: config.lilac,
  headerTitleAlign: 'center',
};
const Gradient = (
  <LinearGradient
    colors={[config.indigo, config.eminence]}
    style={{flex: 1,opacity:0.95}}
    start={{x: 0, y: 3}}
    end={{x: 1, y: 0}}
  />
);
export default NavigationOptions;
