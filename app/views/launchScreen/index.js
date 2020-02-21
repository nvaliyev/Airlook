import React,{ useEffect} from 'react';
import {Image, View, StatusBar} from 'react-native';
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
        },2000)
        return () => {
            clearTimeout(timer)
        };
    }, )

    return (
      <LinearGradient
        colors={[config.indigo, config.eminence]}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
    {Myimage.airplane}
      </LinearGradient>
    );
  }
