import React from 'react';
import {View, TouchableOpacity, Dimensions, Text} from 'react-native';
import {styles} from './style';
import {ROUTES} from '../../servises/routes';
import { Myimage } from '../../servises/constans/images';
import { iSimpleLineIcons } from '../../servises/constans/Icons/SimpleLineIcons';
import { iFontAwesome } from '../../servises/constans/Icons/FontAwesome';

export const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
{Myimage.icon}
      </View>
      <View style={styles.row} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.SettingScreen);
        }}
        style={styles.btn}>
{iFontAwesome.settings}
        <Text style= {styles.text}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.LoginOrRegister);
        }}
        style={styles.btn}>
          {iSimpleLineIcons.logout}
        <Text style= {styles.text}>Log Out</Text>
      </TouchableOpacity>
      <View />
    </View>
  );
};
