import React from 'react';
import {View} from 'react-native';
import styles from './style';
import ROUTES from '../../../servises/routes';
import config from '../../../servises/utils';
import images from '../../../servises/constans/images';
import ClickButton from '../../../components/clickButton';
const LoginOrRegister = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.logo}>{images.logo}</View>
      <ClickButton
        text="Login"
        onPress={() => navigate(ROUTES.LoginSreen)}
        backgroundColor={config.indigo}
      />
      <ClickButton
        text="SignUp"
        onPress={() => navigate(ROUTES.SignUpScreen)}
        backgroundColor={config.eminence}
      />
    </View>
  );
};
export default LoginOrRegister;
