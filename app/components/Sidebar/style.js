import {StyleSheet} from 'react-native';
import config from '../../servises/utils';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.lilac,
    paddingTop:5,
  },
  top: {
    width: '100%',
    height: '10%',
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
  text: {fontSize: 18, marginHorizontal:30,},

  content: {
    flex: 1,
    height:'80%',
    backgroundColor: config.lilac,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignContent:'center',
    marginTop:20,
  },
  btn: {
    flexDirection: 'row',
    marginHorizontal: 5,
    height: 65,
    padding:15,
    justifyContent: 'flex-start',
    borderBottomColor: config.eminence,
  },
  logout:{
    flex:2,
  alignItems:'center',
  justifyContent:'flex-end',
  }
});
export default styles