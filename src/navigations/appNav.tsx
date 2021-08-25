import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewScreen from '../screens/overview';
import ActivityScreen from '../screens/activity';
import ProfileScreen from '../screens/profile';

const Tabs = createBottomTabNavigator();

const HomeNav: FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Overview" component={OverviewScreen} />
      <Tabs.Screen name="Activity" component={ActivityScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
export default HomeNav;
