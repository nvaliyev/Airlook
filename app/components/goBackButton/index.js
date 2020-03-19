
import React from 'react';
import { Icon } from 'react-native-elements';
import config from '../../servises/utils';

const GoBack = ({navigation,color}) => {
  return (
    <Icon name='navigate-before' onPress={() => navigation.goBack(null)} color={color ? color:config.lilac} size={45}/>
  )
}
export default GoBack