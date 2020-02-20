import React from 'react';
import {Image, View, StatusBar} from 'react-native';
import {styles} from '../styles/launchscreen';
import LinearGradient from 'react-native-linear-gradient';

export default class LaunchScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#5d6fc4', '#6f347c']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Image
          source={require('../assets/airplane.png')}
          style={{width: 400}}
        />
      </LinearGradient>
    );
  }
}
