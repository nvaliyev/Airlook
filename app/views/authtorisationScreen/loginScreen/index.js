import React from 'react';
import {View} from 'react-native';
import styles from './style';
import Login from '../../../components/Login';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Login navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
