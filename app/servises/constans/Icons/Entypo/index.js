import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import  config  from '../../../utils';

 const iEntypo = {
   
aircraftland:(<Icon name='aircraft-landing' size = {25} color={config.lilac}/>),
aircraftof:(<Icon name='aircraft-take-off' size = {25} color={config.lilac}/>)
}

console.log(iEntypo.aircraftof)
export default iEntypo