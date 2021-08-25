import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import {Button} from '../components';
const OverviewScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Overview Screen</Text>
      {/* <Button title="Logout" /> */}
    </View>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
