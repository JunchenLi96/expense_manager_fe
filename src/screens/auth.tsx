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
import {OperationStatus} from '../types/userTypes';

const AuthScreen: FC = () => {
  //local states
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [toggleState, setToggleState] = useState<1 | 2>(1);

  const status = useAppSelector(state => state.auth.operationStatus);
  const errorMessage = useAppSelector(state => state.auth.errorMessage);
  const dispatch = useAppDispatch();

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
    //setError(false);
    if (!isLogin && !name?.length) {
      dispatch(AuthActions.auth_failed('Missing name'));
      return false;
    }
    if (!email?.length) {
      dispatch(AuthActions.auth_failed('Missing email'));
      return false;
    }
    if (!password?.length) {
      dispatch(AuthActions.auth_failed('Missing password'));
      return false;
    }
    return true;
  }, [email, name, password, isLogin, dispatch]);

  const handleLogin = useCallback(() => {
    if (validate()) {
      if (isLogin && email && password) {
        dispatch(AuthActions.login({email: email, password: password}));
      } else if (name && email && password) {
        dispatch(
          AuthActions.signUp({name: name, email: email, password: password}),
        );
      }
    }
  }, [validate, dispatch, email, password, name, isLogin]);

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
            loading={status === OperationStatus.Pending}
          />
        </View>

        {status === OperationStatus.Failed ? (
          <Text style={styles.errorMessage}>Sorry! {errorMessage}</Text>
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
});
