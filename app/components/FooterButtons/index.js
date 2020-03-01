
 import React,{useState} from 'react';
 import {Text,TouchableOpacity,} from 'react-native';
 import styles from './style';
 
  const FooterButtons = ({onPress, ico, text}) => {

    return (
<TouchableOpacity style={styles.footerButtons} onPress={onPress}  o>
{ico}
  <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
    )
    } 
    export default FooterButtons