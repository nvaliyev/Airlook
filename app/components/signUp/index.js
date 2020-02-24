import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './style';
import {MButton} from '../mButton';
import {ROUTES} from '../../servises/routes';
import {config} from '../../servises/utils';
import { iFontAwesome } from '../../servises/constans/Icons/FontAwesome';

export const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show,setshow] = useState(true)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username:"
        onChangeText={text => setUsername(text)}
        value={username}
      />

      <TextInput
      secureTextEntry={show}
        style={styles.input}
        placeholder="Password:"
        onChangeText={pass => setPassword(pass)}
        value={password}
      />
      <TouchableOpacity style={styles.b}>
      {iFontAwesome.eye}
      </TouchableOpacity>
     <MButton
        text="SignUp"
        onPress={() => navigation.navigate(ROUTES.FlightScreen)}
        backgroundColor={config.eminence}
      />
    </View>
  );
};
