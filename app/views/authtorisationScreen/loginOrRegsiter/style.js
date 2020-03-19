import {StyleSheet} from 'react-native';
import config from '../../../servises/utils';

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:config.lilac,
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    logo:{
      alignSelf:'center',
   padding:15
    }
   
});
export default styles

