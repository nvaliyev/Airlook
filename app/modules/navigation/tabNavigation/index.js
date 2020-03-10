import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DepartureScreen from '../../../views/departureScreen';
import ArrivalScreen from '../../../views/arrivalScreen';
import { Icon } from 'react-native-elements';
import config from '../../../servises/utils';

const Mytabs = createBottomTabNavigator(
    {
      Departure: {
         screen: DepartureScreen,
         navigationOptions:{
          tabBarIcon:() => (
            <Icon name='flight-takeoff'  color={config.lilac} size={30}/>
          )
        }
        },
      Arrival: { 
        screen: ArrivalScreen,
        navigationOptions:{
          tabBarIcon:() => (
            <Icon name='flight-land'  color={config.lilac} size={30}/>

          )
        }
      },
    },
   
    {
      initialRouteName:'Departure',
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        labelPosition:'beside-icon',
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
          height:45,
          alignItems:'center',

        },
        labelStyle: {
          textAlign: 'center',
          fontSize:18,
        },
        
      
      },
    },

  );
  export default Mytabs;