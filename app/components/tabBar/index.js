import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import FooterButtons from '../footerButtons';
import iEntypo from '../../servises/constans/Icons/entypo';
import { View } from 'react-native';

const Tabs = ({navigation}) => {
    return (
        <LinearGradient
            colors={[config.black,config.indigo, config.eminence,config.black]}
            style={{ height:40,flexDirection:'row',alignItems:'center'}}
            start={{ x: 0, y: 3  }}
            end={{ x: 1, y: 0 }}
            
        >
            <FooterButtons text={'Departure'} ico={iEntypo.aircraftof} onPress={()=>navigation.navigate('Departure')}/>
            <View style={{width:1,backgroundColor:config.lilac,height:40,opacity:0.1}} />
            <FooterButtons text={'Arrival'} ico={iEntypo.aircraftland} onPress={()=>navigation.navigate('Arrival')}/>
        </LinearGradient>
    );

};
export default Tabs;
