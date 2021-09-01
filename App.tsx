import React from 'react';
import MainNav from './src/navigations/mainNav';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
};

export default App;
