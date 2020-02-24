import React from 'react';
import {StyleSheet} from 'react-native';
import { config } from '../../servises/utils';

export const styles = StyleSheet.create({
  content: {
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 8},
    elevation: 20,
    shadowRadius:0.45,
    backgroundColor:config.lilac,
    height:100,
    alignSelf:'stretch',
    marginHorizontal:10,
    borderRadius:4,
    borderLeftWidth:5,
    borderLeftColor:config.eminence

  },
});
