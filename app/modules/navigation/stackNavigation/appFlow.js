import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ROUTES from '../../../servises/routes';
import NavigationOptions from './style';
import SettingScreen from '../../../views/settingScreen';
import Mytabs from '../tabNavigation';
import FlightDetailScreen from '../../../views/flightDetailScreen';
import NewsStack from './newsStack';
import Burger from '../../../components/drawerButton';
import GoBack from '../../../components/goBackButton';

const AppFlow = createStackNavigator(
  {
    Tabs: {
      screen: Mytabs,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <Burger navigation={navigation} />,
        ...NavigationOptions,
      }),
    },
    FlightDetail: {
      screen: FlightDetailScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft:()=> <GoBack navigation={navigation}/>,
        ...NavigationOptions,
      }),
    },
    SettingScreen: {
      screen: SettingScreen,
      title: ROUTES.SettingScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft:()=> <GoBack navigation={navigation}/>,
        ...NavigationOptions,
      }),
    },
    News: {
      screen: NewsStack,
      navigationOptions: () => ({
      headerShown:false      
}),
    },
    
  },
  {
    mode: 'modal',
    initialRouteName:'Tabs'
  },
);

export default AppFlow;
