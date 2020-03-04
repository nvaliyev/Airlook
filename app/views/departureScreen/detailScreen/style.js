import {StyleSheet} from 'react-native';
import config from '../../../servises/utils';
import SettingsContent from '../../../components/settingsContent';

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
    },
  content:{
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginHorizontal: 2, 
    justifyContent: 'center' 
   }

});
export default styles
