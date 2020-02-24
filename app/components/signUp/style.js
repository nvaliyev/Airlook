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
paddingHorizontal:25,
marginHorizontal:25,
marginBottom:6,
borderRadius:5,
elevation:5,
shadowColor:'black',
borderWidth:0.5,
borderColor:config.indigo,
color:config.eminence,
    },

});

