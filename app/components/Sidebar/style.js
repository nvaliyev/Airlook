import {StyleSheet} from 'react-native';
import {config} from '../../servises/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  top: {
    width: '100%',
    height: '20%',
    backgroundColor: config.lilac,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowRadius: 0.45,
    shadowOffset: {width: 0, height: 4},
    shadowColor: 'black',
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
  text: {fontSize: 18, marginHorizontal: 11},
  row: {
    height: 1,
    width: '100%',
    backgroundColor: config.indigo,
  },
  content: {
    flex: 1,
    height: 100,
    backgroundColor: config.lilac,
  },
  btn: {
    flexDirection: 'row',
    marginHorizontal: 15,
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: config.eminence,
  },
});
