import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import {Button} from '../components';
const ActivityScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Activity Screen</Text>
      {/* <Button title="Logout" /> */}
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
