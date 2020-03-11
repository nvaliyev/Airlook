import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../../servises/utils';
import Gradient from '../../../components/gradientBackround';

const NavigationOptions = {
  headerBackground: () => Gradient,
  headerStyle: {
    height: 60,
  },
  headerTintColor: config.lilac,
  headerTitleAlign: 'center',
};

export default NavigationOptions;
