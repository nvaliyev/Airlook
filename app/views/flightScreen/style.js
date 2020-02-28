import {StyleSheet} from 'react-native';
import config  from '../../servises/utils';

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.lilac,
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center'
    },
    filters:{
        flex:2,
        backgroundColor:'orange',
        flexDirection:'row',  
        alignSelf:'stretch',
        justifyContent:'center',
        flexWrap:'wrap'

    },
    filterButtons:{
     height:30,
     justifyContent:'center',
     padding:15
    },
    flightlist:{
        flex:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-start',
        alignSelf:'stretch'
       },
    footer:{
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
    },
    footerButtons:{
       width:'50%',
        height:'100%',
        alignSelf:'center'
    
    }

});
export default styles
