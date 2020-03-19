import {StyleSheet} from 'react-native';
import  config  from '../../servises/utils';

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        
    },
    input:{
        flexDirection:'row',
        backgroundColor:config.lilac,
        height:60,
        paddingHorizontal: 25,
        marginHorizontal: 25,
        alignItems:'center',
        marginBottom: 6,
        borderRadius: 5,
        elevation: 10,
        shadowColor: 'black',
        borderColor:config.indigo,
        color: config.eminence,
    },

});

export default styles