import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import iFontAwesome from '../../servises/constans/Icons/fontAwesome';

const DrawerButton = ({navigation}) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        {iFontAwesome.menu}
      </TouchableOpacity>
    </View>
  );
};

export default DrawerButton;
