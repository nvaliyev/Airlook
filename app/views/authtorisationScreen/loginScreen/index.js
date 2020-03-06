import React from 'react';
import {View, Alert} from 'react-native';
import styles from './style';
import LoginPage from '../../../components/login';


const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LoginPage navigation={navigation}/>
    </View>
  );
};

export default LoginScreen;
