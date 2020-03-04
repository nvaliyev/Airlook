
import React, { useState } from 'react';
import styles from './style';
import { ButtonGroup } from 'react-native-elements'


const FilterButtons = () => {

  const buttons = ['Yesterday', 'Today', 'All Flights', 'Tomorrow',]

  const [selectedIndex, updateIndex] = useState([0])

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