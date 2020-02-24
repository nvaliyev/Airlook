import React from 'react'
import {
Image
} from 'react-native';


export const Myimage = {
  airplane: (
    <Image source={require('../../../assets/Icon.png')} style={{width: 150,resizeMode:'contain',alignSelf:'center',justifyContent:'center'}} />
  ),
  icon:( 
    <Image source={require('../../../assets/logo.png')} style={{width: 200, resizeMode:'contain'}} />

  )
};
