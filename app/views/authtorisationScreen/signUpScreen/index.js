
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './style';
import { SignUp } from '../../../components/signUp';


export default class SignUpScreen extends  Component {

  render() { 
    return (

      <View style={styles.container}>
      
<SignUp navigation={this.props.navigation}/>
      </View>
    )
  }
}







