
 import React,{useState} from 'react';
 import {Text,TouchableOpacity, TouchableOpacityComponent} from 'react-native';
 import styles from './style';
 import {ButtonGroup} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
  const FilterButtons = () => {

    const buttons = ['Yesterday','Today', 'All Flights','Tomorrow',]

    const [selectedIndex,updateIndex]= useState([0])

    return (
    
        <ButtonGroup
        onPress={updateIndex}
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