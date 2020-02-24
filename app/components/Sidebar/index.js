import React from 'react';
import {View, TouchableOpacity, Dimensions, Text} from 'react-native';
import {styles} from './style';
import {ROUTES} from '../../servises/routes';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logo}> AirLook</Text>
      </View>
      <View style={styles.row} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.SettingScreen);
        }}
        style={styles.btn}>
        <Icon name="logout" size={15} style={{textAlign: 'left'}} />
        <Text style= {styles.text}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.LoginOrRegister);
        }}
        style={styles.btn}>
        <Icon name="logout" size={15} style={{textAlign: 'left'}} />
        <Text style= {styles.text}>Log Out</Text>
      </TouchableOpacity>
      <View />
    </View>
  );
};
