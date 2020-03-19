import React from 'react';
import { View} from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import images from '../../servises/constans/images';
import iSimpleLineIcons from '../../servises/constans/Icons/simpleLineIcons';
import iFontAwesome from '../../servises/constans/Icons/fontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerButtons from '../menuButtons';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import { ScrollView } from 'react-native-gesture-handler';

const DrawerContent = ({ navigation }) => {
  const LogOut = async () => {
    await AsyncStorage.clear()
    navigation.navigate(ROUTES.Auth)
  }
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={[config.black, config.indigo, config.eminence,config.black]}
      style={styles.top}
      start={{x: 0, y: 3}}
      end={{x: 1, y: 0}}
      
    > 
     {images.logo}
      </LinearGradient>
      <View style={styles.shadow}/>
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