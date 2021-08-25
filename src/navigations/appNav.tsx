import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewScreen from '../screens/overview';
import ActivityScreen from '../screens/activity';
import ProfileScreen from '../screens/profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewTransactionScreen from '../screens/addTransaction';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Overview" component={OverviewScreen} />
      <Tabs.Screen name="Activity" component={ActivityScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
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
      <Stack.Screen name="New Transaction" component={NewTransactionScreen} />
    </Stack.Navigator>
  );
};
export default HomeNav;
