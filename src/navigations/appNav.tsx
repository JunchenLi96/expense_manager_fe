import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewScreen from '../screens/overview';
import ActivityScreen from '../screens/activity';
import ProfileScreen from '../screens/profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewTransactionScreen from '../screens/addTransaction';
import {Routes} from './route';
import EditNameScreen from '../screens/editName';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={Routes.Overview} component={OverviewScreen} />
      <Tabs.Screen name={Routes.Activity} component={ActivityScreen} />
      <Tabs.Screen name={Routes.Profile} component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

const HomeNav: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name={Routes.NewTransaction}
        component={NewTransactionScreen}
      />
      <Stack.Screen name={Routes.EditName} component={EditNameScreen} />
    </Stack.Navigator>
  );
};
export default HomeNav;
