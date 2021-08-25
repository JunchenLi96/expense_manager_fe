import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import {Button} from '../components';
const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* <Button title="Logout" /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
