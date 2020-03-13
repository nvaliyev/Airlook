import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SwitchNavigator from './modules/navigation/switchNavigator';
import { store, persistor } from './modules/redux/store';
import { StatusBar, SafeAreaView } from 'react-native';
import config from './servises/utils';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={{flex:1}}> 
          <StatusBar barStyle='dark-content' hidden={false} backgroundColor={config.lilac} translucent={false} />
          <SwitchNavigator />
          </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;
