import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {getToken, getUserEmail, getUserName} from '../redux/selectors';
const OverviewScreen: FC = () => {
  const name = useAppSelector(getUserName);
  const email = useAppSelector(getUserEmail);
  const token = useAppSelector(getToken);

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
