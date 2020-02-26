import React from 'react';
import { Provider } from 'react-redux';
import SwitchNavigator from './modules/navigation/switchNavigator';
import store from './modules/redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>)
}
export default App;
