import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import GoBack from '../../../components/goBackButton';
import config from '../../../servises/utils';

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
        headerTitle:()=> null ,
        headerLeft:()=> <GoBack navigation={navigation} color={config.indigo}/>,
        headerTransparent:true,
      }),
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle:()=> null ,
        headerLeft:()=> <GoBack navigation={navigation} color={config.eminence}/>,
        headerTransparent:true,
      }),
    },
  },
  {
    initialRouteName: ROUTES.LoginOrRegister,
  },
);
export default Authstack;
