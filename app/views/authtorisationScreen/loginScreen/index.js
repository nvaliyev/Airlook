import React from 'react';
import {View, Alert} from 'react-native';
import styles from './style';
import Login from '../../../components/login';


const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Login navigation={navigation}/>
    </View>
  );
};

export default LoginScreen;
