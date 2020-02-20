import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {styles} from '../styles/layout';

class Settings extends React.Component {
  render() {
    return <View style={[styles.container, {backgroundColor: '#91d9ed'}]} />;
  }
}
export default Settings;
