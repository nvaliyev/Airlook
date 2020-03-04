import React from 'react';
import {View, TouchableOpacity, Dimensions, Settings} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerContent from '../../../components/sidebar';
import iFontAwesome from '../../../servises/constans/Icons/fontAwesome';
import Mytabs from '../tabNavigation';
import DrawerStack from '../stackNavigation/drawerStackNavigation';
const Navigationdraw = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', marginLeft: 15}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        {iFontAwesome.menu}
      </TouchableOpacity>
    </View>
  );
};
const DrawerMenu = createDrawerNavigator(
  {
    Tabs:Mytabs,
    DrawerStack:DrawerStack,
  },
  {
    drawerWidth: Dimensions.get('window').width - 70,
    contentComponent: ({navigation}) => (
      <DrawerContent navigation={navigation} />
    ),
  },
);
export {Navigationdraw, DrawerMenu};
