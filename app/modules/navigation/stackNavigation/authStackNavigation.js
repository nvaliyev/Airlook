import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import { DrawerMenu } from '../drawNavigation';
import AppFlow from './appFlow';
import Mytabs from '../tabNavigation';

const Authstack = createStackNavigator(
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
      navigationOptions: ({navigation}) => ({
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
    Main: {
      screen: Mytabs,
      navigationOptions:{
          headerShown:false
      }}
    
  },
  {
    initialRouteName: ROUTES.LoginOrRegister,
  },
);
export default Authstack;
