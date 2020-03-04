
import React from 'react';
import { View,} from 'react-native';
import styles from './style';
import { ListItem} from 'react-native-elements'
import config from '../../../servises/utils';
import {lang,conf,notafi} from '../const/index'

const ItemsList = () => {
    
  return (
    <View style={styles.container}>
      <View style={styles.divide} />
      {
        lang.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: config.eminence }}
          />
        ))
      }
      <View style={styles.divide} />
      {
        notafi.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: config.eminence }}
            switch
          />
        ))}
      <View style={styles.divide} />
      {conf.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: config.eminence }}
            onPress={() => alert('Demo Mode')}
            chevron
          />))}
    </View>
  )
}

export default ItemsList







