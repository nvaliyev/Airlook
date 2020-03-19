import React from 'react';
import {View, Alert, StatusBar} from 'react-native';
import styles from './style';
import Login from '../../../components/login';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../../servises/utils';

const LoginScreen = ({navigation}) => {
  return (
    <>
    <StatusBar barStyle='light-content' hidden={false} backgroundColor={config.eminence} translucent={false} />
    <LinearGradient
    colors={[config.indigo, config.eminence,]}
    style={styles.container}
    start={{x: 0, y: 1}}
    end={{x:0 , y: 0}}
  >
      <Login navigation={navigation}/>
    </LinearGradient>
    </>
  );
};

export default LoginScreen;
