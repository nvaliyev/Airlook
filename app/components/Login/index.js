import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';
import MButton from '../mButton';
import ROUTES from '../../servises/routes';
import config from '../../servises/utils';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const User = {username: 'a', password: 'a'};

  const CheckLogin = () => {
    navigation.navigate(ROUTES.FlightScreen);
  };

  // const CheckLogin = (navigation) => {

  //   if (User.username === username && User.password === password) {
  //     console.log('navigation', navigation)
  //     navigation.navigate(ROUTES.FlightScreen)
  //   }
  //   else {
  //     alert('Username or Password is incorrect')
  //   }
  // }

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
        onPress={() => CheckLogin()}
      />
    </View>
  );
};

export default Login;
