import React, {useState} from 'react';
import AppContext from './src/components/AppContext';
import MainNav from './src/navigations/mainNav';

const App: React.FC = () => {
  const [userLoggedIn, setUserLogin] = useState<boolean>(false);

  const login = () => {
    setUserLogin(true);
  };

  const logout = () => {
    setUserLogin(false);
  };

  const user = {
    userLoggedIn,
    login,
    logout,
  };

  return (
    // @ts-ignore
    <AppContext.Provider value={user}>
      <MainNav />
    </AppContext.Provider>
  );
};

export default App;
