import React, {useState} from 'react';
import {View,TouchableOpacity, TextInput, Alert,} from 'react-native';
import styles from './style';
import MButton from '../mButton';
import ROUTES from '../../servises/routes';
import config from '../../servises/utils';
import iFontAwesome  from '../../servises/constans/Icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show,setshow] = useState(true);

  
    const name = AsyncStorage.getItem('username')
  const Register = async () => {
    if (username ===''||password ==='') {
    alert('Please fill empty fields!')
    } else {
      await AsyncStorage.setItem('username', username )     
      await AsyncStorage.setItem('password', password )
    navigation.navigate(ROUTES.FlightScreen)
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
      secureTextEntry={show}
        style={styles.input}
        placeholder="Password:"
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.b}>
      {iFontAwesome.eye}
      </TouchableOpacity>
     <MButton
        text="SignUp"
        onPress={Register}
        backgroundColor={config.eminence}
      />
    </View>
  );
};
export default SignUp