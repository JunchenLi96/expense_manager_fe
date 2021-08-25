import {NavigationContainer} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import AppContext from '../components/AppContext';
import HomeNav from './appNav';
import AuthNav from './authNav';

const MainNav: FC = () => {
  const {userLoggedIn} = useContext(AppContext);
  console.log(userLoggedIn ? 'logged in' : 'logged out');
  return (
    <NavigationContainer>
      {userLoggedIn ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
