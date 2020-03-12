import { StyleSheet } from 'react-native';
import config from '../../servises/utils';

const styles = StyleSheet.create({

    footerButtons: {
        flexDirection: 'row',
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:
    {
        color: config.lilac,
        fontSize: 16,
        marginHorizontal: 15,
    }


});
export default styles
