import {StyleSheet} from 'react-native';
import { config } from '../../servises/utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: "#f7f9fc",
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        
    },
    input:{
height:65,
backgroundColor:config.lilac,
alignSelf:'stretch',
paddingHorizontal:15,
marginHorizontal:25,
marginBottom:6,
borderRadius:5,
elevation:10,
shadowColor:'black',
borderColor:config.eminence,
    },

});

