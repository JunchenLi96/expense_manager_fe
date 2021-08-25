import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/auth';
import {Routes} from './route';

type RootStackParamList = {
  Home: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator();

const AuthNav: FC = () => {
  return (
    <Navigator>
      <Screen name={Routes.AuthScreen} component={AuthScreen} />
    </Navigator>
  );
};
export default AuthNav;
