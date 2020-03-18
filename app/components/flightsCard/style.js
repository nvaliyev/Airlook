import { StyleSheet } from 'react-native';
import config from '../../servises/utils';
const styles = StyleSheet.create({
  content: {
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 7},
    elevation: 8,
    shadowRadius: 6,
    backgroundColor: 'white',
    height: 95,
    marginHorizontal: 10,
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: config.eminence,
    alignSelf: 'stretch',
    marginTop: 10,
    borderTopLeftRadius:15
  },
  top:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:8,
    justifyContent:'space-between',
  },
bottom:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  marginHorizontal:8,
  justifyContent:'space-between'
},
  time: {
    fontSize: 18,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  timeView: {
    borderRadius: 2, 
    marginRight: 15, 
    borderWidth: 1, 
    borderColor: config.lilac
  },
cityText:{
  fontSize:20,
  margin:5,
  fontWeight:'bold'
},
cityView:{
  marginLeft:5,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
  flightText: {
    fontSize:14,
    margin:3,
    marginHorizontal:5
},
flightView: {
  backgroundColor:config.lilac,
  borderRadius:3,
},
  infotext: {
    fontSize:14,
    margin:3
}
});

export default styles