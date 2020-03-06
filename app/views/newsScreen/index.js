import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import ROUTES from '../../servises/routes';
import config from '../../servises/utils';
import ClickButton from '../../components/clickButton';

const NewsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

<Text>  NewsScreen  </Text>

<ClickButton onPress={()=>navigation.navigate(ROUTES.Detail)}  text={'Details'} backgroundColor={config.indigo}/>
</View>
  );
};
export default NewsScreen;
