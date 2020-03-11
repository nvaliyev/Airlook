import React from 'react'
import config from "../../servises/utils";
import LinearGradient from "react-native-linear-gradient";

const Gradient = (
    <LinearGradient
      colors={[config.black, config.indigo, config.eminence,config.black]}
      style={{flex: 1,opacity:0.95,}}
      start={{x: 0, y: 3}}
      end={{x: 1, y: 0}}
    />
  );

  export default Gradient