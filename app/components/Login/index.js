import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';
import MButton from '../mButton';
import ROUTES from '../../servises/routes';
import config from '../../servises/utils';
import AsyncStorage from '@react-native-community/async-storage';
const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const User = { username: 'a', password: 'a' };

  const CheckLogin = async () => {
    const NewUser = { username: await AsyncStorage.getItem('username'), password: await AsyncStorage.getItem('password') }
    if (User.username === username && User.password === password || NewUser.username === username && NewUser.password === password) {
      await AsyncStorage.setItem('LoggedIn', '1')
      navigation.navigate('Main')
    }
    else {
      alert('Username or Password is incorrect')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username:"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password:"
        onChangeText={setPassword}
        value={password}
      />
      <MButton
        backgroundColor={config.indigo}
        text="Login"
        onPress={CheckLogin}
      />
    </View>
  );
};

export default Login;
