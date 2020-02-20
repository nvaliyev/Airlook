import React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';

import Mynavigation from './app/navigation/Drawer';

class App extends React.Component {
  render() {
    return <Mynavigation />;
  }
}

export default App;
