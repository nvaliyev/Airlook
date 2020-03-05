import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FlightScreen from '../../../views/flightScreen';
import DrawerContent from '../../../components/sidebar';
import iFontAwesome from '../../../servises/constans/Icons/fontAwesome';

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
    Flights: {
      screen: FlightScreen,
      navigationOptions: {
        drawerLabel: 'Flights',
      },
    },
  },

  {
    drawerWidth: Dimensions.get('window').width - 70,
    contentComponent: ({navigation}) => (
      <DrawerContent navigation={navigation} />
    ),
  },
  {initialRouteName: 'Flights'},
);
export {Navigationdraw, DrawerMenu};
