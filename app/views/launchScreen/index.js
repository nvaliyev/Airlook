import React,{ useEffect} from 'react';
import {Image, View, StatusBar,ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { config } from '../../servises/utils';
import { Myimage } from '../../servises/constans/images';
import { ROUTES } from '../../servises/routes';
import LoginOrRegister from '../authtorisationScreen/loginOrRegsiter';


 export const LaunchScreen = ({navigation}) => {
  
    useEffect(() => {
        const timer= setTimeout(() => 
        {
            navigation.navigate(ROUTES.LoginOrRegister);
        },2500)
        return () => {
            clearTimeout(timer)
        };
    }, )

    return (
      <LinearGradient
        colors={[config.eminence,config.indigo]}
        style={{flex: 1}}
        start={{x: 1, y: 2}}
        end={{x: 1, y: 0}}>
    {Myimage.airplane}
    <ActivityIndicator size="large" color={config.eminence} />
      </LinearGradient>
    );
  }
