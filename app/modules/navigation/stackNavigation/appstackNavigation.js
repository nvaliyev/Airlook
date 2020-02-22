import React from 'react';
import {View, TouchableOpacity,Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions,} from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import LoginOrRegister from '../../../views/authtorisationScreen/loginOrRegsiter';
import LoginScreen from '../../../views/authtorisationScreen/loginScreen';
import SignUpScreen from '../../../views/authtorisationScreen/signUpScreen';
import {ROUTES} from '../../../servises/routes';
import SettingScreen from '../../../views/settingScreen';
import FlightScreen from '../../../views/flightScreen';
import { config } from '../../../servises/utils';
import Icon from 'react-native-vector-icons/Entypo';





const  Navigationdraw = ({navigation}) => {
  console.log('navigation', navigation)
  
   return (
      <View style={{ flexDirection: 'row', marginLeft:15 }}>
        <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
        <Icon name="menu" size ={35} color="white"/>
        </TouchableOpacity>
      </View>
    );
  
}



const Gradient = (
  <LinearGradient
    colors={[config.indigo, config.eminence]}
    style={{flex: 1,}}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
  />
);

export const DrawerMenu = createDrawerNavigator(
  {
  Flights: {
    screen:FlightScreen,
    navigationOptions: {
      drawerLabel: 'Flights',
    },
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      drawerLabel: 'Settings',
    
    },
    
}},
{initialRouteName:'Flights'}
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
    navigationOptions: ({navigation}:NavigationScreenProps) => ({
      title: ROUTES.FlightScreen,
      headerLeft:() => <Navigationdraw navigation={navigation} />,
      headerBackground: () => Gradient,
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    })
  },
  SettingsScreen: {
    screen: SettingScreen,
    navigationOptions: () => ({
      headerLeft:null,
      title: ROUTES.SettingScreen,
      headerBackground: () => Gradient,
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
},
{initialRouteName:ROUTES.LoginOrRegister}

);

