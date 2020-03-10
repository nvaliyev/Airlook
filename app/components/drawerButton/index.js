import React from 'react';
import { View, TouchableOpacity,} from 'react-native';
import iFontAwesome from '../../servises/constans/Icons/fontAwesome';

const Burger = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        {iFontAwesome.menu}
      </TouchableOpacity>
    </View>
  );
};

export default Burger