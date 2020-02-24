import {StyleSheet} from 'react-native';
import { config } from '../../servises/utils';

export const styles = StyleSheet.create({
    button: {

    alignSelf:'stretch',
    alignItems:'center',
      backgroundColor:config.indigo,
      padding:20,
      margin:3, 
      marginHorizontal:25,
      borderRadius:5,
      shadowRadius:10,
      shadowColor:"#000",
      shadowOpacity:0.6,
    shadowOffset:{width:0,height:8,},
    elevation:5
    },
    text: {
     color:config.lilac,
     fontSize:18,
    

    }
});

