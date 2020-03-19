import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../servises/utils';
import { SearchBar, Icon } from 'react-native-elements'
import { View } from 'react-native';
import Burger from '../drawerButton';
import CurrTime from '../time';
import styles from './style';

const Header = ({ navigation }) => {
    
    return (
        <LinearGradient
            colors={[config.black, config.indigo, config.eminence, config.black]}
            style={styles.container}
            start={{ x: 0, y: 3 }}
            end={{ x: 1, y: 0 }}
        >
            <Burger navigation={navigation} />

            <View style={styles.rightBar}>
                <View style={styles.time}>
                <CurrTime />
                </View>
        <View style={styles.search}>
         <Icon name='search' color={config.lilac} size={30} />
            </View>
            </View>

        </LinearGradient>


    );

};
export default Header;
