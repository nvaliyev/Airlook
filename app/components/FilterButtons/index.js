
import React, { useState } from 'react';
import styles from './style';
import { ButtonGroup } from 'react-native-elements';
import ButtonsList from './const';

const FilterButtons = () => {

  const [selectedIndex, updateIndex] = useState([0]);

  return (
    <ButtonGroup
      onPress={updateIndex}
      selectedIndexes={selectedIndex}
      textStyle={styles.text}
      selectedButtonStyle={styles.selectedText}
      buttonStyle={styles.button}
      buttons={ButtonsList}
      containerStyle={styles.container}
      selectMultiple={true}
      innerBorderStyle={styles.innerBorder}
    />
  )
}
export default FilterButtons;