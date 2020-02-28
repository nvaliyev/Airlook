import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import ROUTES from '../../../servises/routes';
import SettingScreen from '../../../views/settingScreen';
import NavigationOptions from './style';
import {DrawerMenu, Navigationdraw} from '../drawNavigation/';
import NewsScreen from '../../../views/newsScreen';
import NewsDetailScreen from '../../../views/newsScreen/detailsScreen';
import FlightDetailScreen from '../../../views/flightScreen/detailscreen/index'
const Appstack = createStackNavigator(
  {
    LoginOrRegister: {
      screen: LoginOrRegister,
      navigationOptions: () => ({
        title: ROUTES.LoginOrRegister,
        headerShown: false,
        ...NavigationOptions,
      }),
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: ROUTES.LoginSreen,
        ...NavigationOptions,
      }),
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: ROUTES.SignUpScreen,
        ...NavigationOptions,
      }),
    },
    FlightScreen: {
      screen: DrawerMenu,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => <Navigationdraw navigation={navigation} />,
        ...NavigationOptions,
      })
    },
      FlightDetailScreen: {
        screen:FlightDetailScreen,
        navigationOptions: () => ({
          title: ROUTES.FlightDetailScreen,
          ...NavigationOptions,
        }),
    },
    SettingScreen: {
      screen: SettingScreen,
      title: ROUTES.SettingScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
    NewsScreen: {
      screen: NewsScreen,
      title: ROUTES.NewsScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
    NewsDetailScreen: {
      screen: NewsDetailScreen,
      title: ROUTES.NewsDetailScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
  },
  {
    initialRouteName: ROUTES.LoginOrRegister,
  },
);

export default Appstack;
