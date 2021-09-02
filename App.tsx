import React from 'react';
import MainNav from './src/navigations/mainNav';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
