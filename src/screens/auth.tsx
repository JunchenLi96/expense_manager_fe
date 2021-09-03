import React, {FC, useCallback, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {AuthActions} from '../redux/authSlice';
import {BinarySwitch, Button, Input} from '../components';
import userApi from '../api/users';
import {UserDTO} from '../types/userTypes';
import {ApiResponse} from 'apisauce';
import {APIErr} from '../types/errorDTO';

const AuthScreen: FC = () => {
  //local states
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [validateStatus, setStatus] = useState<string | null | undefined>(null);
  const [validateError, setError] = useState<boolean>(false);
  const [toggleState, setToggleState] = useState<1 | 2>(1);

  const status = useAppSelector(state => state.auth.operationState);
  const dispatch = useAppDispatch();

  const loginOperation = useCallback(async () => {
    dispatch(AuthActions.setStatus('pending'));
    const response: ApiResponse<UserDTO, APIErr> = await userApi.login(
      email,
      password,
    );
    if (response.ok && !!response.data) {
      const userDetails = response.data;
      dispatch(AuthActions.login(userDetails));
      dispatch(AuthActions.setStatus('fulfilled'));
    } else {
      setStatus(response.data as APIErr);
      setError(true);
      dispatch(AuthActions.setStatus('failed'));
    }
  }, [email, password, dispatch]);

  const signUpOperation = useCallback(async () => {
    const response: ApiResponse<UserDTO, APIErr> = await userApi.signUp(
      name,
      email,
      password,
    );
    dispatch(AuthActions.setStatus('pending'));
    if (response.ok && !!response.data) {
      const userDetails = response.data;
      dispatch(AuthActions.login(userDetails));
      dispatch(AuthActions.setStatus('fulfilled'));
    } else {
      setStatus(response.data as APIErr);
      setError(true);
      dispatch(AuthActions.setStatus('failed'));
    }
  }, [name, email, password, dispatch]);

  //read about useEffect and !!

  //example of useMemo
  const isLogin = useMemo(() => {
    return toggleState === 1;
  }, [toggleState]);
  //const isLogin = toggleState === 1;
  const toggleLogin = useCallback(() => {
    //To handle switch toggle
    setToggleState(1);
    //State changes according to switch
  }, []);

  const toggleSignUp = useCallback(() => {
    //To handle switch toggle
    setToggleState(2);
    //State changes according to switch
  }, []);

  //use callback hook
  const validate = useCallback((): boolean => {
    //email? == email undefined
    setError(false);
    if (!isLogin && !name?.length) {
      setStatus('Missing name');
      setError(true);
      return false;
    }
    if (!email?.length) {
      setStatus('Missing email');
      setError(true);
      return false;
    }
    if (!password?.length) {
      setStatus('Missing password');
      setError(true);
      return false;
    }
    return true;
  }, [email, name, password, isLogin]);

  const handleLogin = useCallback(() => {
    if (validate()) {
      if (isLogin) {
        loginOperation();
      } else {
        signUpOperation();
      }
    }
  }, [validate, loginOperation, signUpOperation, isLogin]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.rootContainer}>
      <View style={styles.container}>
        <View>
          <BinarySwitch
            state={toggleState}
            option1={'Log In'}
            option2={'Sign Up'}
            onPress1={toggleLogin}
            onPress2={toggleSignUp}
          />
        </View>
        <Text>{!isLogin ? 'Sign up' : 'Login'} Screen</Text>
        {!isLogin ? (
          <Input placeholder="Name" value={name} onChangeText={setName} />
        ) : null}
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <View style={styles.button}>
          <Button
            title={!isLogin ? 'Sign up' : 'Login'}
            onPress={handleLogin}
            loading={status === 'pending'}
          />
        </View>

        {validateError ? (
          <Text style={styles.errorMessage}>Sorry! {validateStatus}</Text>
        ) : null}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '50%',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#ff0033',
  },
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
  },
});
