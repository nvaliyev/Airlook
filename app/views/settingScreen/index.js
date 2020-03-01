
import React from 'react';
import {View,Text} from 'react-native';
import  styles  from './style';
import { ListItem, Divider, colors } from 'react-native-elements'
import { color } from 'react-native-reanimated';
import config from '../../servises/utils';
config
 const SettingScreen =()=> {
  const conf = [
    {
      title: 'Contact us',
      icon: 'mail',
    },
    {
      title: 'Rate App',
      icon: 'star'
    },
    {
      title: 'Privacy Policy',
      icon: 'gavel'
    },
  ]

  const lang = [
    {
      title: 'Language',
      icon: 'translate',}
  
  ]
  const notafi= [
    {
      title: 'Notification',
      icon: 'notifications',}
  
  ]
  
return (

      <View style={styles.container}>

<View style={{height:5}} />

{
    lang.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{ name: item.icon ,color:config.eminence}}
 

      />
    ))

  }    
<View style={{height:30}} />

  {
    notafi.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{ name: item.icon ,color:config.eminence}}
        switch
         
      />
    ))
  }
  <View style={{height:30}} />

  {
    conf.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{ name: item.icon ,color:config.eminence}}
        onPress={()=>alert('Demo Mode')}
        chevron

      />
    ))
    
  }
 

  


      </View>
    )
}
export default SettingScreen







