import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SwitchNavigator from './modules/navigation/switchNavigator';
import {store, persistor} from './modules/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SwitchNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
