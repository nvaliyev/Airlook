import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import {ROUTES} from '../../../servises/routes';
import SettingScreen from '../../../views/settingScreen';
import FlightScreen from '../../../views/flightScreen';

const Gradient = (
  <LinearGradient
    colors={['#5d6fc4', '#6f347c']}
    style={{flex: 1}}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
  />
);

export const DrawerMenu = createDrawerNavigator(
  {
  Flights: {
    screen: FlightScreen,
    navigationOptions: {
      drawerLabel: 'Flights',
    },
  },
  Settings: {
    //Title
    screen: SettingScreen,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
}}
)

export const Appstack = createStackNavigator({
  LoginOrRegister: {
    screen: LoginOrRegister,
    navigationOptions: () => ({
      title: ROUTES.LoginOrRegister,
      headerBackground: () => Gradient,
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: ROUTES.LoginSreen,
      headerBackground: () => Gradient,
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: ROUTES.SignUpScreen,
      headerBackground: () => Gradient,
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
  FlightScreen: {
    screen: DrawerMenu,
    navigationOptions: {
      headerShown: false,
    }
  },
  SettingsScreen: {
    screen: SettingScreen,
    navigationOptions: () => ({
      title: ROUTES.SettingScreen,
      headerBackground: () => Gradient,
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
},
{initialRouteName:ROUTES.LoginOrRegister}

);

