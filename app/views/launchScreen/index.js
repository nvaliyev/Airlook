import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import images from '../../servises/constans/images';
import styles from './style';
import ROUTES from '../../servises/routes';

const LaunchScreen = ({navigation}) => {
  const IsLoggedin = async () => {
    navigation.navigate(ROUTES.Auth);

  };
  useEffect(() => {
    const timer = setTimeout(() => {
      IsLoggedin();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <LinearGradient
      colors={[config.eminence, config.indigo]}
      style={styles.View}
      start={{x: 1, y: 2}}
      end={{x: 1, y: 0}}>
      {images.logo}
      <ActivityIndicator size='large' color={config.eminence} style={styles.indicator} />
    </LinearGradient>
  );
};
export default LaunchScreen;
