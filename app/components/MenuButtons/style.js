import { StyleSheet } from 'react-native';
import config from '../../servises/utils';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 30,
  },
  btn: {
    flexDirection: 'row',
    marginHorizontal: 5,
    height: 65,
    padding: 15,
    justifyContent: 'flex-start',
    borderBottomColor: config.eminence,
  },
});
export default styles