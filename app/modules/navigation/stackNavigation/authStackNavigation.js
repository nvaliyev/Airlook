import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import GoBack from '../../../components/goBackButton';

const Authstack = createStackNavigator(
  {
    LoginOrRegister: {
      screen: LoginOrRegister,
      navigationOptions: ({navigation}) => ({
        title: ROUTES.LoginOrRegister,
        headerShown: false,
        ...NavigationOptions,
      }),
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({navigation}) => ({
        title: ROUTES.LoginSreen,
        headerLeft:()=> <GoBack navigation={navigation}/>,
        ...NavigationOptions,
      }),
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: ({navigation}) => ({
        title: ROUTES.SignUpScreen,
        headerLeft:()=> <GoBack navigation={navigation}/>,
        ...NavigationOptions,
      }),
    },
  },
  {
    initialRouteName: ROUTES.LoginOrRegister,
  },
);
export default Authstack;
