
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './style';
import { ROUTES } from '../../../servises/routes';


export default class LoginOrRegister extends  Component  {


  render() { 
    return (

      <View style={styles.container}>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate(ROUTES.LoginSreen)  }> 
      <Text> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate(ROUTES.SignUpScreen)  }> 
      <Text> SignUp </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate(ROUTES.FlightScreen)  }> 
      <Text> FlightScreen </Text>
      </TouchableOpacity>
      </View>
    )
  }
}







