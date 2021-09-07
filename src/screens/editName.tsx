import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button} from '../components';
import {useMountEffect} from '../hooks/useMountEffect';
import usePrevious from '../hooks/usePrevious';
import {NavProps} from '../navigations/navParams';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  getErrorMessage,
  getOperationStatus,
  getUserName,
} from '../redux/selectors';
import {UserActions} from '../redux/userSlice';
import {OperationStatus} from '../types/userTypes';

const EditNameScreen: FC = () => {
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();
  const name = useAppSelector(getUserName);
  const status = useAppSelector(getOperationStatus);
  const errorMessage = useAppSelector(getErrorMessage);
  const previousStatus = usePrevious(status);

  const [nameToUpdate, setNameToUpdate] = useState<string | undefined>(name);

  const handleUpdate = useCallback(() => {
    if (nameToUpdate) {
      dispatch(UserActions.updateName({name: nameToUpdate}));
    } else {
      dispatch(UserActions.user_failed('Name cannot be empty'));
    }
  }, [dispatch, nameToUpdate]);

  useMountEffect(() => {
    dispatch(UserActions.userSetIdle());
  });

  useEffect(() => {
    if (previousStatus !== status && status === OperationStatus.Fulfilled) {
      navigation.goBack();
    }
  }, [navigation, previousStatus, status]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text> Name: </Text>
          <TextInput
            style={styles.text}
            value={nameToUpdate}
            onChangeText={setNameToUpdate}>
            {''}
          </TextInput>
        </View>
        <View style={styles.buttonBox}>
          {status === OperationStatus.Failed ? (
            <Text style={styles.errorMessage}>Sorry! {errorMessage}</Text>
          ) : null}
          <Button
            title="Cancel"
            onPress={() => navigation.goBack()}
            loading={false}
          />
          <Button
            title="Update"
            onPress={handleUpdate}
            loading={status === OperationStatus.Pending}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditNameScreen;

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
    marginBottom: '20%',
  },
  errorMessage: {
    color: '#ff0033',
  },
});
