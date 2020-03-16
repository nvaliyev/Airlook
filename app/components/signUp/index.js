import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Alert, } from 'react-native';
import styles from './style';
import config from '../../servises/utils';
import iFontAwesome from '../../servises/constans/Icons/fontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import ClickButton from '../clickButton';
import ROUTES from '../../servises/routes';
import { connect } from 'react-redux';
import { setUserName, setUserPassword } from '../../views/authtorisationScreen/redux/actions';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setshow] = useState(true);

  const Register = () => {

    setUserName({ UserName: username })
    setUserPassword({ UserPassword: password })
    navigation.navigate(ROUTES.Main)

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username:"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        secureTextEntry={show}
        style={styles.input}
        placeholder="Password:"
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.b}>
        {iFontAwesome.eye}
      </TouchableOpacity>
      <ClickButton
        text="SignUp"
        onPress={Register}
        backgroundColor={config.eminence}
      />
    </View>
  );

};
const mapStateToProps = () => ({
});


const mapDispatchToProps = {
  setUserName,
  setUserPassword
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);