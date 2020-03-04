import React from 'react';
import { TouchableOpacity, Text,} from 'react-native';
import styles from './style';

const DrawerButtons = ({ onPress, ico, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btn}>
      {ico}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
export default DrawerButtons;