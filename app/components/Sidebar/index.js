import React from 'react';
import {View, TouchableOpacity, Text, } from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import images from '../../servises/constans/images';
import iSimpleLineIcons  from '../../servises/constans/Icons/SimpleLineIcons';
import iFontAwesome from '../../servises/constans/Icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

 const DrawerContent = ({navigation}) => {
const LogOut = async() => {
  await AsyncStorage.clear()
  navigation.navigate(ROUTES.LoginOrRegister)
}

  return (
    <View style={styles.container}>
      <View style={styles.top}>
{images.logo}
      </View>
      <View style={styles.content}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.SettingScreen);
        }}
        style={styles.btn}>
{iFontAwesome.settings}
        <Text style= {styles.text}>Settings</Text>
      </TouchableOpacity>
<View style={styles.logout}>
      <TouchableOpacity
        onPress={() => LogOut()}
        style={styles.btn}>
          {iSimpleLineIcons.logout}
        <Text style= {styles.text}>Log Out</Text>
      </TouchableOpacity>

      </View>
    </View>
    </View>
  
  );
};
export default DrawerContent