import React from 'react';
import {View} from 'react-native';
import styles from './style';
import ROUTES from '../../../servises/routes';
import config from '../../../servises/utils';
import images from '../../../servises/constans/images';
import ClickButton from '../../../components/clickButton';
import LinearGradient from 'react-native-linear-gradient';

const LoginOrRegister = ({navigation}) => {

  return (

<LinearGradient
    colors={[config.indigo,config.eminence ,config.lilac]}
    style={styles.container}
    start={{x: 2, y: 0}}
    end={{x: 2, y: 1}}
  >
     <View style={styles.logo}>{images.logo}</View>
      <ClickButton
        text="Login"
        onPress={() => navigation.navigate(ROUTES.LoginSreen)}
        backgroundColor={config.indigo}
      />
      <ClickButton
        text="SignUp"
        onPress={() => navigation.navigate(ROUTES.SignUpScreen)}
        backgroundColor={config.eminence}
      />
</LinearGradient>
     
  );
};
export default LoginOrRegister;
