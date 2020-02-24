import React, {Component,useState} from 'react';
import {View, Text, TouchableOpacity,TextInput,AsyncStorage} from 'react-native';
import {styles} from './style';
import { MButton } from '../mButton';
import { ROUTES } from '../../servises/routes';
import { config } from '../../servises/utils';

export const Login = ({navigation}) => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  return (
<View style ={styles.container}>
        <TextInput   
        style={styles.input}
        placeholder="Username:"
          onChangeText={text=>setUsername(text)}
          value={username}
        /> 
        
        <TextInput
        secureTextEntry={true}   
        style={styles.input}
        placeholder="Password:"
          onChangeText={pass=>setPassword(pass)}
          value={password}
        /> 
        <MButton backgroundColor={config.indigo} text='Login'  onPress={()=>navigation.navigate(ROUTES.FlightScreen)
} />
</View>
  )

};
