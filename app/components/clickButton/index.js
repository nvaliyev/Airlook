
import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './style';

const ClickButton = ({ text, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  )
}
export default ClickButton