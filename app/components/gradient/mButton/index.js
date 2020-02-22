
 import React, { Component } from 'react';
 import {
   View,
   Text,
   TouchableOpacity
 } from 'react-native';
 import {styles} from './style';
 
 export const MButton = ({text,onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}> 
      <Text style = {styles.text}> {text} </Text>
      </TouchableOpacity>
     
    )
    }