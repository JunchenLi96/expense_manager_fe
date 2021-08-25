import React, {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import AppContext from '../components/AppContext';

const ProfileScreen: FC = () => {
  const {logout} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={() => logout()} />
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
