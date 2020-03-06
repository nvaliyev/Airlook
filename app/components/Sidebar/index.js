import React from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import images from '../../servises/constans/images';
import iSimpleLineIcons from '../../servises/constans/Icons/simpleLineIcons';
import iFontAwesome from '../../servises/constans/Icons/fontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerButtons from '../menuButtons';
import { withNavigation } from 'react-navigation';

const DrawerContent = ({ navigation }) => {
  const LogOut = async () => {
    await AsyncStorage.clear()
    navigation.navigate(ROUTES.Auth)
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {images.logo}
      </View>
      <View style={styles.content}>
        <DrawerButtons onPress={() => navigation.navigate('Tabs')} ico={iFontAwesome.calendar} text='Flights' />
        <DrawerButtons onPress={() => navigation.navigate(ROUTES.SettingScreen)} ico={iFontAwesome.settings} text='Settings' />
        <DrawerButtons onPress={() => navigation.navigate(ROUTES.News)} ico={iFontAwesome.newspaper} text='News' />
        <View style={styles.logout}>
          <DrawerButtons onPress={() => LogOut()} ico={iSimpleLineIcons.logout} text='Log Out' />
        </View>
      </View>
    </View>

  );
};
export default DrawerContent