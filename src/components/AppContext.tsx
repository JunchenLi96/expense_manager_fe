import React from 'react';

const AppContext = React.createContext({
  userLoggedIn: false,
  login: () => undefined,
  logout: () => undefined,
});

export default AppContext;
