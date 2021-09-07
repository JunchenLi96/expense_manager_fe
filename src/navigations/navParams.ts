import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from './route';

export type NavParams = {
  [Routes.AuthScreen]: undefined;
  [Routes.Overview]: undefined;
  [Routes.Activity]: undefined;
  [Routes.Profile]: undefined;
  [Routes.NewTransaction]: undefined;
  [Routes.EditName]: undefined;
};

export type NavProps = StackNavigationProp<NavParams>;
