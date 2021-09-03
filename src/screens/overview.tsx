import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../redux/hooks';
const OverviewScreen: FC = () => {
  const name = useAppSelector(state => state.user.name);
  const email = useAppSelector(state => state.user.email);
  const token = useAppSelector(state => state.auth.token);

  return (
    <View style={styles.container}>
      <Text>
        Welcome userName: {name}, userEmail: {email}, userToken{token}
      </Text>
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
