
 import React,{useState} from 'react';
 import {Text,TouchableOpacity, TouchableOpacityComponent
 } from 'react-native';
 import styles from './style';
 import {ButtonGroup} from 'react-native-elements'
import config from '../../servises/utils';
import { color } from 'react-native-reanimated';
 
  const FilterButtons = () => {

    const buttons = ['Today','All','Yesterday','Tomorrow', 'All Flights']

    const [selectedIndex,updateIndex]= useState([0])


console.log(selectedIndex)
    return (
        <ButtonGroup
        onPress={(index) => updateIndex(index)}
        selectedIndexes={selectedIndex}
        textStyle={styles.text}
        selectedButtonStyle={styles.selectedText}
        buttonStyle={styles.button}
        buttons={buttons}
        containerStyle={styles.container}
        selectMultiple={true}
        innerBorderStyle={styles.innerBorder}
      />
    )
    } 
    export default FilterButtons