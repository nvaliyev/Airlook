
import React from 'react';
import { View } from 'react-native';
import styles  from './style';
import SignUp  from '../../../components/signUp';

 const SignUpScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
<SignUp navigation={{navigation}}/>
      </View>  
      )}
      
      
      
export default SignUpScreen






