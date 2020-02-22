import {StyleSheet} from 'react-native';
import { config } from '../../../servises/utils';

export const styles = StyleSheet.create({
    button: {

    alignSelf:'stretch',
    alignItems:'center',
      backgroundColor:config.indigo,
      padding:20,
      margin:3, 
      marginHorizontal:20,
      borderRadius:5
    },
    text: {
     color:config.lilac,

    }
});

