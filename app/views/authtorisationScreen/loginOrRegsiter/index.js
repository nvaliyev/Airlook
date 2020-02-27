import React from 'react';
import {View} from 'react-native';
import styles from './style';
import ROUTES from '../../../servises/routes';
import MButton from '../../../components/mButton';
import config from '../../../servises/utils';
import images from '../../../servises/constans/images';

const LoginOrRegister = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.logo}>{images.logo}</View>
      <MButton
        text="Login"
        onPress={() => navigate(ROUTES.LoginSreen)}
        backgroundColor={config.indigo}
      />
      <MButton
        text="SignUp"
        onPress={() => navigate(ROUTES.SignUpScreen)}
        backgroundColor={config.eminence}
      />
    </View>
  );
};
export default LoginOrRegister;
