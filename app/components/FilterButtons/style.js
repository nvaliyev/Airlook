import {StyleSheet} from 'react-native';
import config  from '../../servises/utils';

 const styles = StyleSheet.create({
     container:{
      flex:1,
      alignItems:'center',
      maxHeight:30,
      flexDirection:'row',
      alignSelf:'center',
      justifyContent:'center',
      backgroundColor:'transparent',
      opacity:0.9,
      borderWidth:0,
      padding:1,
     },
     selectedText:{
    backgroundColor:config.eminence,
    elevation:3,
     },
     innerBorder:{
        width:0,
        color:config.lilac,
        backgroundColor:config.lilac
        
     },
    button: {
        backgroundColor:config.lilac,
        borderRadius:4,
        borderWidth:1,
        borderColor:config.eminence,
        marginHorizontal:2,        
    },
    text: 
        {
         color:config.eminence,
            fontSize:12
        }

    
});
export default styles
