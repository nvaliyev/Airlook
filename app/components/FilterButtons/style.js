import {StyleSheet} from 'react-native';
import config  from '../../servises/utils';

 const styles = StyleSheet.create({
     container:{
      flex:1,
      alignItems:'center',
      height:40,
      justifyContent:'center',
     },
     selectedText:{
    backgroundColor:config.eminence
     },
     innerBorder:{
        width:3,
        color:config.lilac,
     },
    button: {
        backgroundColor:config.lilac,borderRadius:2,borderWidth:2,borderColor:config.eminence
},
    text: 
        {
         color:config.eminence,
            fontSize:15
        }

    
});
export default styles
