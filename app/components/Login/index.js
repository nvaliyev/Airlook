import React, { useState } from 'react';
import { View, TextInput,Text, TouchableOpacity, Button } from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import config from '../../servises/utils';
import AsyncStorage from '@react-native-community/async-storage';
import ClickButton from '../clickButton';
import { connect } from 'react-redux';
import iFontAwesome from '../../servises/constans/Icons/fontAwesome';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setshow] = useState(false);
  const User = { username: 'a', password: 'a' };

  const CheckLogin = (state) => {
   if(state.UserName===username){
     
     navigation.navigate(ROUTES.Main) 
   }

  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
      <TextInput
        style={{flex:1}}
        placeholder="Username:"
        onChangeText={setUsername}
        value={username}
      />
      </View>
            <View style={styles.input}>
      <TextInput
        secureTextEntry={show}
        style={{flex:1}}
        placeholder="Password:"
        onChangeText={setPassword}
        value={password}
      />
       <TouchableOpacity onPress={()=>setshow(!show)} >
        {iFontAwesome.eye}
      </TouchableOpacity>
      </View>
      <ClickButton
        backgroundColor={config.indigo}
        text="Login"
        onPress={CheckLogin}/>
</View>
)
}


const mapStateToProps = (state) => ({
UserName:state.UserName,
UserPassword:state.UserPassword

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

