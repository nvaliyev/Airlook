
import React from 'react';
import { Icon } from 'react-native-elements';
import config from '../../servises/utils';

const GoBack = ({navigation}) => {
  return (
    <Icon name='navigate-before' onPress={() => navigation.goBack(null)} color={config.lilac} size={40}/>
  )
}
export default GoBack