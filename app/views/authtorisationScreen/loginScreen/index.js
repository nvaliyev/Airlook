
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './style';
import { Login } from '../../../components/Login';
import { config } from '../../../servises/utils';
import { ROUTES } from '../../../servises/routes';
import { MButton } from '../../../components/mButton';

export default class LoginScreen extends  Component {

  render() { 
    return (

      <View style={styles.container}>
      
            <Login navigation={this.props.navigation}/>
      </View>
    )
  }
}







