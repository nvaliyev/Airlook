
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {SwitchActions} from 'react-navigation'
import { styles } from './style';
import { ROUTES } from '../../../servises/routes';
import { MButton } from '../../../components/gradient/mButton';

export default class LoginOrRegister extends  Component  {




  render() { 
    return (

      <View style={styles.container}>

      <MButton text="Login" onPress={()=>this.props.navigation.navigate(ROUTES.LoginSreen)}/>
      <MButton text="SignUp" onPress={()=>this.props.navigation.navigate(ROUTES.SignUpScreen)}/>

      </View>
    )
  }
}







