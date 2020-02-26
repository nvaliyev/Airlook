import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,TextInput} from 'react-native';
import styles from './style';
import MButton from '../mButton';
import ROUTES  from '../../servises/routes';
import config  from '../../servises/utils';

 const Login = ({navigation}) => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const User = {username:'admin', password:'n12'}

 const CheckLogin = async () => {
    
    if(User.username === username && User.password === password){
      await AsyncStorage.setItem('isLoggedIn', '1')
    navigation.navigate(ROUTES.FlightScreen)
    }
    else 
   {alert('Username or Password is incorrect')
 }
 }

 
  
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
        <MButton backgroundColor={config.indigo} text='Login'  onPress={CheckLogin} />
</View>
  )
};

export default Login