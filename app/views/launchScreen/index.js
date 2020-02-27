import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import images from '../../servises/constans/images';
import ROUTES from '../../servises/routes';

const LaunchScreen = ({navigation}) => {
  const IsLoggedin = async () => {
    const islogged = await AsyncStorage.getItem('LoggedIn');
    navigation.navigate(
      islogged !== '1' ? ROUTES.LoginOrRegister : ROUTES.FlightScreen,
    );
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
      style={{flex: 1}}
      start={{x: 1, y: 2}}
      end={{x: 1, y: 0}}>
      {images.splashlogo}
      <ActivityIndicator size="large" color={config.eminence} />
    </LinearGradient>
  );
};
export default LaunchScreen;
