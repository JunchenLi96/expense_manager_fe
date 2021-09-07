import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../components';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {AuthActions} from '../redux/authSlice';
import {NavProps} from '../navigations/navParams';
import {Routes} from '../navigations/route';
import {useNavigation} from '@react-navigation/core';
import {getUserEmail, getUserName} from '../redux/selectors';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<NavProps>();

  const dispatch = useAppDispatch();
  const name = useAppSelector(getUserName);
  const email = useAppSelector(getUserEmail);

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text> Name: </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}> {name} </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.EditName)}>
            <Text style={styles.text}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        <Text> Email: </Text>
        <Text style={styles.text}> {email} </Text>
      </View>
      <View style={styles.buttonBox}>
        <Button
          title="Logout"
          onPress={() => dispatch(AuthActions.logout())}
          loading={false}
        />
      </View>
    </View>
  );
};
//logout() is a function creates a action, when dispatching, this function sends a action to the reducer and the reducer will modify the state to what the action states
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    marginTop: '5%',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
