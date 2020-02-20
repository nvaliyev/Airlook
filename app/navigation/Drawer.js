import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Settings from '../views/settingScreen';
import Main from '../views/mainScreen';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';



class DrawerNavigate extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    const DrawerIcon = <Icon name="menu" size={35} color="white" />;
    return (
      <View style={{flexDirection: 'row', marginLeft: 15}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {DrawerIcon}
        </TouchableOpacity>
      </View>
    );
  }
}
const Gradient = (
  <LinearGradient
    colors={['#5d6fc4', '#6f347c']}
    style={{flex: 1}}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
  />
);
const MainStack = createStackNavigator({
  First: {
    screen: Main,
    navigationOptions: ({navigation}) => ({
      title: 'Flights',
      headerLeft: () => <DrawerNavigate navigationProps={navigation} />,
      headerBackground: () => Gradient,
      headerTintColor: '#fff',
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
})
Colors
const SettingsStack = createStackNavigator({
  Second: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: () => <DrawerNavigate navigationProps={navigation} />,
      headerBackground: () => Gradient,
      headerTintColor: '#fff214',
      headerStyle: {height: 65},
      headerTitleAlign: 'center',
    }),
  },
})
const DrawerNavigation = createDrawerNavigator({
  Main: {
    screen: MainStack,
    navigationOptions: {
      drawerLabel: 'Flights',
    },
  },
  Settings: {
    //Title
    screen: SettingsStack,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
});
const MyDrawer = createAppContainer(DrawerNavigation);
export default class Mynavigation extends React.Component {
  render() {
    return <MyDrawer />;
  }
}
