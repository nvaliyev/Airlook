import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DepartureScreen from '../../../views/departureScreen';
import ArrivalScreen from '../../../views/arrivalScreen';
import { Icon } from 'react-native-elements';
import config from '../../../servises/utils';
import Gradient from '../../../components/gradientBackround';
import Tabs from '../../../components/tabBar';

const Mytabs = createBottomTabNavigator(
    {
      Departure: {
         screen: DepartureScreen,
        },
      Arrival: { 
        screen: ArrivalScreen,
      },
    },
    {
      tabBarComponent:({navigation}) => <Tabs navigation={navigation}/>,
      initialRouteName:'Departure',
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelPosition:'beside-icon',
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          height:45,
          alignItems:'center',
          backgroundColor:'transparent'
        },
        labelStyle: {
          textAlign: 'center',
          fontSize:18,
        },
              },
    },

  );
  export default Mytabs;