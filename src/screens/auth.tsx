import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from '../components';
const App: FC = () => {
  return (
    <view style={styles.container}>
      <text>Sign Up Screen</text>
      <Input placeholder="Name" onChangeText={text => console.log(text)} />
    </view>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
