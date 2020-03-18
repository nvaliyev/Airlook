
import React, { useState } from 'react';
import styles from './style';
import { ButtonGroup } from 'react-native-elements';
import ButtonsList from './const';

const FilterButtons = () => {

  const [selectedIndex, updateIndex] = useState([1]);

  return (
    <ButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      textStyle={styles.text}
      selectedButtonStyle={styles.selectedText}
      buttonStyle={styles.button}
      buttons={ButtonsList}
      containerStyle={styles.container}
      innerBorderStyle={styles.innerBorder}
    />
  )
}
export default FilterButtons;