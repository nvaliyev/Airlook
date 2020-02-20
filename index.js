import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import LaunchScreen from './app/views/launchScreen';
import 'react-native-gesture-handler';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'LaunchScreen',
    };
    setTimeout(() => {
      this.setState({
        currentScreen: 'App',
      });
    }, 2000);
  }

  render() {
    let startScreen =
      this.state.currentScreen === 'LaunchScreen' ? <LaunchScreen /> : <App />;
    return startScreen;
  }
}

AppRegistry.registerComponent(appName, () => Start);
