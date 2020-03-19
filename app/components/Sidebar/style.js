import {StyleSheet} from 'react-native';
import config from '../../servises/utils';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.lilac,
    
  },
  top: {
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow:{
    height:2,
    backgroundColor:'transparent',
    elevation:5,
  },
  content: {
    flex:7,
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