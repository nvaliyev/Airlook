import React from 'react'
import {Image} from 'react-native';
import  img  from '../../../assets/img';


const images = {
  splashlogo: (
    <Image source={img.splashlogo} style={{width: 150,resizeMode:'contain',alignSelf:'center',justifyContent:'center'}} />
  ),
  logo:( 
    <Image source={img.logo} style={{width: 200, resizeMode:'contain', maxHeight:250}} />

  )
};
export default images