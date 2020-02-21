import React,{Component, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import SwitchNavigator from './modules/navigation/switchNavigator';

class App extends Component {
  render() {
    
    return <SwitchNavigator/>;

  }
}

export default App;
