import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const CurrTime =()=> {

    const [Curtime,settime] = useState();

    useEffect(() => {
        let time = setInterval ( ()=>{
            settime(new Date().toLocaleTimeString())
        }, 1000);
        return ()=>clearInterval(time)
      });
return (
   
<Text style={styles.text}>{Curtime}</Text>

)

};
export default CurrTime;