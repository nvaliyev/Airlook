import { StyleSheet } from 'react-native';
import config from '../../servises/utils';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: config.indigo,
    padding: 20,
    margin: 3,
    marginHorizontal: 25,
    borderRadius: 5,
    shadowRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 6, },
    elevation: 5
  },
  text: {
    color: config.lilac,
    fontSize: 18,
  }
});
export default styles
