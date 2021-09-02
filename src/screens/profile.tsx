import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {useAppDispatch} from '../redux/hooks';
import {AuthActions} from '../redux/authSlice';

const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={() => dispatch(AuthActions.logout())} />
    </View>
  );
};
//logout() is a function creates a action, when dispatching, this function sends a action to the reducer and the reducer will modify the state to what the action states
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
