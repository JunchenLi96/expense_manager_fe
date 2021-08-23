import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
const App: FC = () => {
  return (
    <view style={styles.container}>
      <text>Home Screen</text>
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
