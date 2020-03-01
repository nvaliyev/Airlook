import {StyleSheet} from 'react-native';
import config from '../../servises/utils';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.lilac,
    
  },
  top: {
    width: '100%',
    maxHeight:70,
    backgroundColor: config.lilac,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 60,
    color: config.eminence,
    alignSelf: 'center',
  
  },

  content: {
    flex: 1,
    height:'80%',
    backgroundColor: config.lilac,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignContent:'center',
    marginTop:20,
  },

  logout:{
    flex:2,
  alignItems:'center',
  justifyContent:'flex-end',
  }
});
export default styles