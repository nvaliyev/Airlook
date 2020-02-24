import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SwitchActions} from 'react-navigation';
import {styles} from './style';
import {ROUTES} from '../../../servises/routes';
import {MButton} from '../../../components/mButton';
import { config } from '../../../servises/utils';

export default class LoginOrRegister extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <MButton text="Login" onPress={() => navigate(ROUTES.LoginSreen)} backgroundColor={config.indigo}/>
        <MButton text="SignUp" onPress={() => navigate(ROUTES.SignUpScreen)} backgroundColor={config.eminence}/>
      </View>
    );
  }
}
