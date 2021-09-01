import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {useAppDispatch} from '../redux/hooks';
import {logout} from '../redux/userSlice';

const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
