import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import {ROUTES} from '../../../servises/routes';
import SettingScreen from '../../../views/settingScreen';
import FlightScreen from '../../../views/flightScreen';
import {NavigationOptions} from './style';
import { DrawerContent } from '../../../components/Sidebar';
import { iFontAwesome } from '../../../servises/constans/Icons/FontAwesome';
const Navigationdraw = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', marginLeft: 15}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
  {iFontAwesome.menu}   
</TouchableOpacity> 
    </View>
  );
};

export const DrawerMenu = createDrawerNavigator(
  {
    Flights: {
      screen: FlightScreen,
      navigationOptions: {
        drawerLabel: 'Flights',
        
      },
    },
  },

  {drawerWidth: Dimensions.get('window').width - 70,
  contentComponent: ({navigation}) => <DrawerContent navigation={navigation} />
},
  {initialRouteName: 'Flights'},
);

export const Appstack = createStackNavigator(
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
      }),
    },
    SettingScreen: {
      screen: SettingScreen,
      title: ROUTES.SettingScreen,
      navigationOptions: () => ({
        ...NavigationOptions,
      }),
    },
  },
  {
    initialRouteName: ROUTES.LoginOrRegister,
  },
);
