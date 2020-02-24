import {StyleSheet} from 'react-native';
import {config} from '../../servises/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  top: {
    width: '100%',
    height: '15%',
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
    textShadowRadius: 0.5,
    textShadowColor: config.indigo,
    textShadowOffset: {width: 1, height: 1},
  },
  text:{fontSize:16, marginHorizontal:10},
  row: {
    height: 5,
    width: '100%',
    backgroundColor: config.indigo,
  },
  content: {
    flex: 1,
    height: 100,
    backgroundColor: config.lilac,
  },
  btn:{
   flexDirection:'row',
   marginHorizontal:10,
   height:50,
   justifyContent:'flex-start',
   alignItems:'center',
   borderBottomWidth:1,
   borderBottomColor:config.eminence

  }
});
