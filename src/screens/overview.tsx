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
        Welcome <br />
        UserName: {name}, <br />
        UserEmail: {email}, <br />
        UserToken: {token}
      </Text>
    </View>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
