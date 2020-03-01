import {StyleSheet} from 'react-native';
import config  from '../../servises/utils';

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.lilac,
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    filters:{
        flex:1,
        backgroundColor:'transparent',
        minHeight:25,
        margin:5,
        justifyContent:'center'
        
    },
   
    flightlist:{
        flex:11,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'flex-start',
        alignSelf:'stretch'
       },
    footer:{
    height:40,
    minHeight:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch', 
    opacity:0.95
    },



});
export default styles
