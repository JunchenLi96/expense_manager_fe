import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {useAppSelector} from '../redux/hooks';
import HomeNav from './appNav';
import AuthNav from './authNav';

const MainNav: FC = () => {
  const userLoggedIn = useAppSelector(state => state.user.userLoggedIn);
  console.log(userLoggedIn ? 'logged in' : 'logged out');
  return (
    <NavigationContainer>
      {userLoggedIn ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
