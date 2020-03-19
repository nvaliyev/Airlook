import React from 'react';
import {View} from 'react-native';
import styles from './style';
import SignUp from '../../../components/signUp';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../../servises/utils';

const SignUpScreen = ({navigation}) => {
  return (
    <LinearGradient
    colors={[ config.eminence ,config.indigo,]}
    style={styles.container}
    start={{x: 0, y: 1}}
    end={{x: 0, y: 0}}
  >
      <SignUp navigation={navigation} />
</LinearGradient>
      )
}

export default SignUpScreen;
