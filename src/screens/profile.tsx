import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {useAppDispatch} from '../redux/hooks';
import {AuthActions} from '../redux/authSlice';

const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text>Something</Text>
      </View>
      <Button
        title="Logout"
        onPress={() => dispatch(AuthActions.logout())}
        loading={false}
      />
    </View>
  );
};
//logout() is a function creates a action, when dispatching, this function sends a action to the reducer and the reducer will modify the state to what the action states
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textBox: {
    //alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: '30%',
    paddingVertical: '50%',
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    justifyContent: 'flex-start',
  },
});
