import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import {ROUTES} from '../../../servises/routes';
import {config} from '../../../servises/utils';

export const NavigationOptions = {
  
    headerBackground: () => Gradient,
    headerStyle: {
      height:50,
      elevation:15,
      
    },
    headerTintColor:config.lilac,
    headerTitleAlign: 'center',
    
    
  };


const Gradient = (
  <LinearGradient
    colors={[config.indigo, config.eminence]}
    style={{flex: 1 ,}}
    start={{x: 0, y: 3}}
    end={{x: 1, y: 0}}
  />
);
