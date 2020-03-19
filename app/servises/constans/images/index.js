import React from 'react'
import {Image} from 'react-native';
import  img  from '../../../assets/img';
import styles from './styles';


const images = {
  splashlogo: (
    <Image source={img.splashlogo} style={styles.Splashlogo} />
  ),
  logo:( 
    <Image source={img.logo} style={{width: 250, resizeMode:'contain', maxHeight:250,}} />

  ),
belavia:( 
<Image source={img.belavia} style={{width:55,height:35,resizeMode:'contain'}} />),

belaviabig:( 
  <Image source={img.belavia} style={{width:180,height:90,resizeMode:'contain'}} />)
};
export default images